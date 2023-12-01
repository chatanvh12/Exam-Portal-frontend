import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/Srevices/category-service.service';
import { QuizServiceService } from 'src/app/Srevices/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quizes',
  templateUrl: './update-quizes.component.html',
  styleUrls: ['./update-quizes.component.css']
})
export class UpdateQuizesComponent {

  constructor(private route:ActivatedRoute,
    private _quiz:QuizServiceService,
    private category:CategoryServiceService,
    private router:Router){

  }
  categories:any={
    cId:'',
    title:'',
    discription:''
  }
  qId1:any
  quiz:any={
    qId: '',
    title: '',
    description: "",
    maxMark: "",
    numberOfQuestion: "",
    category: {
      cId: '',
      title:'',
      discription:''
    },
    active: true
  }
  ngOnInit() : void{
    this.qId1=this.route.snapshot.paramMap.get('qId')
    alert(this.qId1)
    this.quiz=this._quiz.getQuiz(this.qId1).subscribe(
      (data)=>{
        this.quiz=data;
        // this.quiz.category.cid
        console.log(this.quiz)
      }
      ,
      (error)=>{
        console.log(error)
      }
    )

    this.category.categories().subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error)
      alert("Error in loading category data")
    })
  }

  onSubmit(){
    this._quiz.updateQuiz(this.quiz).subscribe(
      (data)=>{
        Swal.fire("success","Quiz Updated Successfully",'success').then((e)=>{
          this.router.navigate(['/admin/view-quizzes'])
        })
        console.log(data)
      }
      ,
      (error)=>{
        Swal.fire("error","Uanble to update !! Please Try again","error")
        console.log(error)
      }
    )
  }

}
