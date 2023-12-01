import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/Srevices/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-components',
  templateUrl: './view-components.component.html',
  styleUrls: ['./view-components.component.css']
})
export class ViewComponentsComponent {

  categories = [
    {
      cId:"",
      title:"",
      discription :"",
    }
  ]
  constructor(private category:CategoryServiceService,private snack:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.category.categories().subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error)
      alert("Error in loading data")
    })
  }

  Delete(cid:any){
    console.log(cid);
    return this.category.deleteCategories(cid).subscribe(
      (data:any)=>{
        // this.snack.open("Deleted successfully","ok")
         Swal.fire("success","Deleted Successfully","success").then((e)=>{
          window.location.reload()
        })
      }
      ,
      (error)=>{
        Swal.fire("Questions related to this Quize are there so you not able to delte this!!")
        console.log(error)
      }
    )
  }
}
