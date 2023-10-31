import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[] = [];
  
  constructor() {
   
   }

   register(data: any) {
    let usersDetails = localStorage.getItem("userDetails");
    if (usersDetails) {
      this.users = JSON.parse(usersDetails)
      this.users.push(data);
      localStorage.setItem("userDetails", JSON.stringify(this.users));
    } else {
      this.users = [data];
      localStorage.setItem("userDetails", JSON.stringify(this.users));
    }
    return "true";
  }
  

  login(data: any) {
    let usersDetails = localStorage.getItem("userDetails")
    if (usersDetails) {
      let userArr: any = JSON.parse(usersDetails)
      // let arr = []
      // arr.push(userArr)
      let searchObject = userArr.find((user: { email: string; }) => user.email == data.email);
      if (searchObject) {
        if (searchObject.password == data.password) {
          return "true";
        } else {
          return "false";
        }
      }
      else {
        return "false";
      }
    } else {
      return "false";
    }
  }
}
