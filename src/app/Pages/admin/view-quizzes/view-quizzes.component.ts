import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { QuizServiceService } from 'src/app/Srevices/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent {
  quizzes :any=
  {
    qId: '',
    title: "",
    description: "",
    maxMark: "",
    numberOfQuestion: "",
    category: {
      cId: '',
      title: "",
      discription: ''
    },
    active: ''
  }
  isActice=false;
constructor(private quiz:QuizServiceService,private snack:MatSnackBar,private router:Router) { }

ngOnInit(): void {
 
  this.quiz.quizzes().subscribe(
    (data)=>{
      this.quizzes=data;
      if(this.quizzes.active==true){
        this.isActice=true;
      }
      console.log(data)
    }
    ,
    (error)=>{
      console.log(error)
      alert("Error in Loading Data");
    }
  )
}

deleteQuiz(qId:any){
  Swal.fire(
    {
      icon:'info',
      'title':"Are you sure ?",
      confirmButtonText:'Delete',
      showCancelButton:true
    }
  ).then(
    (result)=>{
      if(result.isConfirmed){
        //delete
        this.quiz.deleteQuiz(qId).subscribe(
          (data)=>{
            // this.quizzes.filter((quiz1: { qId: any; })=>quiz1.qId!=qId)
            Swal.fire("success",'Quiz deleted',"success").then((e)=>{
              window.location.reload()
            })
            // window.location.reload()
          },
          (error)=>{
            Swal.fire("Error","Error while deleting quiz",'error')
            this.snack.open("Error While Deleting")
          }
        )
      }
    }
  )
}


}
