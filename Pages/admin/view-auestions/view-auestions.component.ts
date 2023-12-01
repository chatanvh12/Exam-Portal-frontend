import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Srevices/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-auestions',
  templateUrl: './view-auestions.component.html',
  styleUrls: ['./view-auestions.component.css']
})
export class ViewAuestionsComponent {
  qId:any
  title:any
  questions:any = [
    {
      quesId:'',
      quiz :{
        qId:''
      },
      coutent : '',
      image : '',
      option1 : '',
      option2 : '',
      option3 : '',
      option4 : '',
      answer : ''
    }
  ]

  constructor(
    private route:ActivatedRoute,
    private quesService:QuestionService
  ){}

  ngOnInit():void{
    console.log("hello")
    this.qId=this.route.snapshot.paramMap.get("qId")
    this.title=this.route.snapshot.paramMap.get("title")

    console.log(this.qId+this.title)

    this.quesService.getQuizQuestions(this.qId).subscribe(
      (data)=>{
        this.questions=data;
        console.log(data)
      }
      ,
      (error)=>{
        Swal.fire("success","Error while loading data",'error')
      }
    )
    
  }

  public deleteQue(qid:any){
    console.log(qid)
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
          this.quesService.deleteQuestion(qid).subscribe(
            (data)=>{
              Swal.fire("success",'Question deleted',"success").then((e)=>{
                window.location.reload()
              })
            },
            (error)=>{
              Swal.fire("Error","Error while deleting Question",'error')
            }
          )
        }
      }
    )
  }

  public updateQue(qid:any){
    
  }
}
