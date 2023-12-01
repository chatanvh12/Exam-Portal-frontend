import { Component } from '@angular/core';
import { CategoryServiceService } from 'src/app/Srevices/category-service.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {
  categories = [
    {
      cId:"",
      title:"",
      discription :"",
    }
  ]
  constructor(private category:CategoryServiceService){

  }

  ngOnInit(){
    this.category.categories().subscribe(
      (data:any)=>{
      this.categories=data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error)
      alert("Error in loading data")
    })
  }
}