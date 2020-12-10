import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:8080/lunchtime/"

@Injectable({
  providedIn: 'root'
})
export class CantiniereAPIService {

  constructor(private http: HttpClient) {}

  forgotPassword(email: string){
    return this.http.post(BASE_URL + "forgotpassword?email=" + email, null)
  }

}