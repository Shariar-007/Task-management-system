import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {

  constructor() { }


  getDataFromLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  setDataToLocalStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }
}
