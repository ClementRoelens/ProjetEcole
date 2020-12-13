import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/User';

const BASE_URL = "http://localhost:8080/lunchtime/"

@Injectable({
  providedIn: 'root'
})
export class CantiniereAPIService {

  constructor(private http: HttpClient) {}

  forgotPassword(email: string){
    return this.http.post(BASE_URL + "forgotpassword?email=" + email, null)
  }
  
  findUser(id: number, token: string){

    let options = {
      headers: {"Authorization": token}
    }

    return this.http.get(BASE_URL + "user/find/" + id, options)
  }

  getMenu(){
    return this.http.get(BASE_URL + "menu/findallavailablefortoday")
  }
  getMenuImg(id:number){
    return this.http.get(BASE_URL + "menu/findimg/"+id)
  }
  getMealImg(id:number){
    return this.http.get(BASE_URL + "meal/findimg/"+id)
  }
  updateUser(user: User, token: string){
    let options = {
      headers: {"Authorization": token}
    }

    return this.http.post(BASE_URL + "user/update/" + user.id, user, {headers: options.headers, observe : "response"})
  }

}