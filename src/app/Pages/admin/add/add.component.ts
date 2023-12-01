import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryServiceService } from 'src/app/Srevices/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  category={
    title:'',
    discription:''
  }
  constructor(private categoryy:CategoryServiceService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null){
      this.snack.open("Title Required",'ok')
      return;
    }
    else{
      this.categoryy.addCategory(this.category).subscribe(
        (data:any)=>{
          console.log(data)
          this.category.title=""
          this.category.discription=""
          this.snack.open("Category is added successfully",'ok',{
            duration:2000,
          })
        }
        ,
        (error)=>{
          this.snack.open("Server Error , Try again Later",'ok')
        }
      )
    }
  }
}
