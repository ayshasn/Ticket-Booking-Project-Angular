
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';


// const options = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': 'Token d09c66c4592aaafd95108f22c80f9bb9a8e2d6ce'
//   })
// }



@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(
    private http: HttpClient,private router:Router){
     let dateTime = new Date() 
  }
  
  storeToken(token: any) {
    localStorage.setItem('authToken', token);
  }

  private getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // logout() {
  //   localStorage.removeItem('authToken');
  //   console.log('User logged out');
  // }

  employee_login(loginData: any) {
    const loginparams = {
      username: loginData.username,
      password: loginData.password,
      expected_role: 'employee'   // Pass role for backend validation
    };
    console.log("Loginparams", loginparams);
    return this.http.post<{ token: string }>('http://127.0.0.1:8000/userlogin/', loginparams);
  }
  
  
  

  getTicketDetails(): Observable<any> {
    const token = this.getToken();
    const options = { headers: new HttpHeaders({ 'Authorization': `Token ${token}` }) };  
    return this.http.get('http://127.0.0.1:8000/employee/dashboard/', options)
  }
  ticketButton(data: any): Observable<any> {
    const token = this.getToken();
    const options = { headers: new HttpHeaders({ 'Authorization': `Token ${token}` }) }; 
    return this.http.post('http://127.0.0.1:8000/submit-request/', data, options)
  }
  deleteTicket(id: any): Observable<any> {
    const token = this.getToken();
    const options = { headers: new HttpHeaders({ 'Authorization': `Token ${token}` }) }; 
    return this.http.delete(`http://127.0.0.1:8000/employee/cancel-request/${id}/`,options);
  }
  viewRequest(requestId: number) {

    let stringRequest = <unknown>requestId
    stringRequest = <number>stringRequest
    console.log("Navigate to Request_id",stringRequest)
    let url = 'http://127.0.0.1:8000/employee/view-request/' + stringRequest
    console.log(url)

    const token = this.getToken();
    if (!token) {
      console.error('User not authenticated');
      return throwError(() => new Error('User not authenticated'));
    }
    
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    
    return this.http.get<any[]>(url,{headers});

  }

  manager_login(loginForm: FormGroup) {
    const loginparams = {
      username: loginForm.value.username,
      password: loginForm.value.password,
      expected_role:"manager"
    };
    console.log("Loginparams", loginparams)

    return this.http.post<{ token: string }>('http://127.0.0.1:8000/userlogin/', loginparams);

  }

  getRequestDetails(sortBy: string,filterEmployee:string,filterStatus:string): Observable<any> {
    const token = this.getToken();  // Assuming you have this function to get the token
    const headers = new HttpHeaders().set('Authorization',`Token ${token}` ) 
    let params = new HttpParams();

    if (sortBy) {
      params = params.set('date_sort', sortBy);
    }
    // if (filterFrom) {
    //   params = params.set('from', filterFrom);
    // }
    // if (filterTo) {
    //   params = params.set('to', filterTo);
    // }

    if (filterStatus) {
      params = params.set('status', filterStatus);
      console.log(params)
    }

    if(filterEmployee){
      params = params.set('search',filterEmployee)
    }
    return this.http.get('http://127.0.0.1:8000/manager/view-requests ', {params,headers});
  }

  storeManager(manager_name: string) {
    console.log("Manager Name",manager_name)
    localStorage.setItem('managerName', manager_name);
  }
  getManager() {
    return localStorage.getItem('managerName');
  }
  getEmployeeId(){
    return localStorage.getItem('employeeId');
  }
  getManagerId(){
    return localStorage.getItem('managerId')
  }


  // manager vieweing a specific request 
  viewRequestManager(requestId: number) {

    let stringRequest = <unknown>requestId
    stringRequest = <number>stringRequest
    console.log("Navigate to Request_id",stringRequest)
    let url = 'http://127.0.0.1:8000/manager/view-request/' + stringRequest
    console.log(url)

    const token = this.getToken();
    if (!token) {
      console.error('User not authenticated');
      return throwError(() => new Error('User not authenticated'));
    }
    
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    
    return this.http.get<any[]>(url,{headers});

  }
  updateManagerNote(requestId: number, updateData: any) {
    const url = `http://127.0.0.1:8000/manager/action/${requestId}/`;
    const token = this.getToken();
    if (!token) {
      console.error('User not authenticated');
      return throwError(() => new Error('User not authenticated'));
    }
  
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    return this.http.put<any>(url, updateData, { headers });
  } 

  admin_login(loginForm: FormGroup) {
    const loginparams = {
      username: loginForm.value.username,
      password: loginForm.value.password
    };
    console.log("Loginparams", loginparams)

    return this.http.post<{ token: string }>('http://127.0.0.1:8000/admin_login/', loginparams);

  }
  getRequestDetailsAdmin(sortBy: string, filterEmployee: string, filterStatus: string): Observable<any> {
    const token = this.getToken();  // Function to retrieve token

    if (!token) {
        console.error("No authentication token found!");
        return throwError("Unauthorized request. Please login.");
    }

    const headers = new HttpHeaders({
        'Authorization': `Token ${token}`,  // Ensure this is correctly formatted
        'Accept': 'application/json'  // Ensure response is JSON
    });
    console.log(headers)

    let params = new HttpParams();
    if (sortBy) params = params.set('date_sort', sortBy);
    if (filterStatus) params = params.set('status', filterStatus);
    if (filterEmployee) params = params.set('search', filterEmployee);

    return this.http.get('http://127.0.0.1:8000/api/view-requests', { headers, params });

  }

  viewRequestAdmin(requestId: number) {

    let stringRequest = requestId as unknown
    stringRequest = stringRequest as number
    console.log("Navigate to Request_id",stringRequest)
    const url = 'http://127.0.0.1:8000/api/view-specific-request/' + stringRequest
    console.log(url)

    const token = this.getToken();
    if (!token) {
      console.error('User not authenticated');
      return throwError(() => new Error('User not authenticated'));
    }
    
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    
    return this.http.get<any[]>(url,{headers});

  }

  updateAdminNote(requestId: number, updateData: any) {
    const url = `http://127.0.0.1:8000/update-notes/${requestId}/`;
    const token = this.getToken();
    if (!token) {
      console.error('User not authenticated');
      return throwError(() => new Error('User not authenticated'));
    }
  
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    return this.http.put<any>(url, updateData, { headers });
  }

  closeTravelRequest(requestId: number): Observable<any> {
    const url = `http://127.0.0.1:8000/api/close-request/${requestId}/`;
    const headers = new HttpHeaders({
      'Authorization': `Token ${localStorage.getItem('authToken')}`, // Ensure token is stored in localStorage
      'Content-Type': 'application/json'
    });


    return this.http.put(url, {}, { headers });
  }

  addEmployee(employeeForm: any){
    const token = this.getToken();
  
    if (!token) {
      console.error('User not authenticated');
      return throwError(() => new Error('User not authenticated'));
    }
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json' 
      })
    };
  
    const requestBody = {
      first_name: employeeForm.value.first_name,
      last_name: employeeForm.value.last_name,
      designation: employeeForm.value.designation,
      manager_id: employeeForm.value.manager_id,
      username: employeeForm.value.username,
      email: employeeForm.value.email,
      user_type:"employee",
      password: employeeForm.value.password,
      
    };
  
    console.log("Trying to log new request", requestBody);
  
    return this.http.post<any>(
      'http://127.0.0.1:8000/add_user/',
      requestBody, 
      httpOptions
    );
  }

  addManager(managerData: any) {
    const token = this.getToken();
    if (!token) {
      console.error('User not authenticated');
      return throwError(() => new Error('User not authenticated'));
    }
  
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      }),
    };
  
    console.log('Trying to log new manager request', managerData);
  
    return this.http.post<any>(
      'http://127.0.0.1:8000/add_user/',
      managerData,
      httpOptions
    );
  }
  
  listManagersAdmin(){
    const token = this.getToken();
    if (!token) {
      console.error('User not authenticated');
      return throwError(() => new Error('User not authenticated'));
    }
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
  
    return this.http.get<any[]>('http://127.0.0.1:8000/api/managers/', { headers },);
  }
  


  getAllEmployees(): Observable<any> {
    const token = this.getToken();
    
    if (!token) {
      console.error('User not authenticated');
      throw new Error('User not authenticated');
    }

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      })
    };

    return this.http.get<any>(`http://127.0.0.1:8000/api/employees/`, httpOptions);
  }
  getAllManagers(): Observable<any> {
    const token = this.getToken();
    
    if (!token) {
      console.error('User not authenticated');
      throw new Error('User not authenticated');
    }

    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      })
    };

    return this.http.get<any>(`http://127.0.0.1:8000/api/managers/`, httpOptions);
  }
}

