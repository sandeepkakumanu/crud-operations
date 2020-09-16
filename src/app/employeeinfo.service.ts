import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeinfoService {

  constructor(private http:HttpClient) { }
  GetEmployee(){
    return this.http.get("http://192.168.3.253:9000/ctrl/getall");
  }
    SaveEmployee(data){
      return this.http.post("http://192.168.3.253:9000/ctrl/save",data);
    }
    GetEmployeebyid(data){
      return this.http.post("http://192.168.3.253:9000/ctrl/getbyid/1",data);
    }
    updateemployee(data){
      return this.http.put("http://192.168.3.253:9000/ctrl/update/{id}",data)
    }

}
