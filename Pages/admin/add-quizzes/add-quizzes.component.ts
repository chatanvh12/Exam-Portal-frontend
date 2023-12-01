import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryServiceService } from 'src/app/Srevices/category-service.service';
import { QuizServiceService } from 'src/app/Srevices/quiz-service.service';

@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrls: ['./add-quizzes.component.css']
})
export class AddQuizzesComponent {

  categories = [
    {
      cId: 0,
      title: "",
      description: "",
    }
  ]

  quizzes: any = {
    qId: 0,
    title: '',
    description: "",
    maxMark: "",
    numberOfQuestion: "",
    category: {
    },
    active: true
  }
  constructor(private quiz: QuizServiceService, private category: CategoryServiceService, private snack: MatSnackBar) { }

  ngOnInit(): void {
    //getting categories from the database
    this.category.categories().subscribe((data: any) => {
      this.categories = data;
      console.log(this.categories);
    },
      (error) => {
        console.log(error)
        alert("Error in loading category data")
      })
  }

  onSubmit() {
    console.log(this.quizzes)
    this.quiz.addQuiz(this.quizzes).subscribe(
      (data) => {
        console.log(data+"quiz added")
        
        this.quizzes = {
          qId: '',
          title: '',
          description: "",
          maxMark: "",
          numberOfQuestion: "",
          category: {
            cId: '',
          },
          active: false
        }
        this.snack.open("Quiz added Successfully ", 'Ok');
        console.log(this.quizzes.category.cId)
      },
      (error) => {
        this.snack.open("Error while adding quiz!! Try Again", "ok")
        return
      }
    )
  }

}
