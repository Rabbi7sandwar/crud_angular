import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataList: any
  constructor() { }

  data() {
    if (localStorage.getItem("data")) {
      this.dataList = localStorage.getItem("data")
      let list = JSON.parse(this.dataList)
      return list;
    }else{
      return "no data";
    }
  }

}
