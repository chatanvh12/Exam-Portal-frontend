import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceService } from 'src/app/Srevices/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quizzes',
  templateUrl: './load-quizzes.component.html',
  styleUrls: ['./load-quizzes.component.css']
})
export class LoadQuizzesComponent {
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
  catId:any;
  constructor(private _route:ActivatedRoute,private _quizService:QuizServiceService){
    
  }

  ngOnInit(){

    this._route.params.subscribe((params)=>
    {
      this.catId=params['categoryId'];
      console.log(this.catId)
        if(this.catId==0){
          console.log("load all the quizzes")
          //this._quizService.quizzes().subscribe(
            this._quizService.getActiveQuizzes().subscribe(
            (data)=>{
              this.quizzes=data;
              console.log(this.quizzes)
            }
            ,
            (error)=>{
              Swal.fire("error","Server Error in Loading Data","error")
            }
          )
        }
        else{
          // this.quizzes=[]
          console.log("load specific quize")
          this.quizzes=[]
          this._quizService.getQuizesOfCategory(this.catId).subscribe(
            (data)=>{
              console.log("Hello2")
              this.quizzes=data;
              console.log("helllllo",this.quizzes,"Good morninf")
            },
            (error)=>{
              console.log(error)
              Swal.fire("error","Error in loading data in load quize 2","error")
            }
          )
        }
    })
    // this.catId=this._route.snapshot.paramMap.get("categoryId")
    

    
  }
}
