import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  constructor(private http:HttpClient) { }

  //load all categories
  public categories(){
    return this.http.get(`${baseUrl}/category/`)
  }

  //add new Categories
  public addCategory(category:any){
    return this.http.post(`${baseUrl}/category/`,category)
  }

  //delete categorie
  public deleteCategories(cid:any){
    console.log(cid)
    console.log(`${baseUrl}/category/${cid}`)
    return this.http.delete(`${baseUrl}/category/${cid}`)
  }
}