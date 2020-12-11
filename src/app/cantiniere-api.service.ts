import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:8080/lunchtime/"

@Injectable({
  providedIn: 'root'
})
export class CantiniereAPIService {

  constructor(private http: HttpClient) {}

  findUser(id: number, token: string){

    let options = {
      headers: {"Authorization": token}
    }

    return this.http.get(BASE_URL + "user/find/" + id, options)
  }

}