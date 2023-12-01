import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

 //passing function as a parameter is callback
  //concept - dependency injection
  //private used that means this object is for class also
  constructor(private http:HttpClient) { }

  //get the data
  public quizzes(){
    return this.http.get(`${baseUrl}/quiz/`)
  }

  //add quiz
  public addQuiz(quiz:any){
    return this.http.post(`${baseUrl}/quiz/`,quiz)
  }

  //delete Quiz
  public deleteQuiz(qId:any){
    return this.http.delete(`${baseUrl}/quiz/${qId}`)
  }

  //get the single quiz
  public getQuiz(qId:any){
    return this.http.get(`${baseUrl}/quiz/${qId}`)
  }

  //update the data
  public updateQuiz(quiz:any){
    return this.http.put(`${baseUrl}/quiz/`,quiz)
  }

  public getQuizesOfCategory(cid:any){
    return this.http.get(`${baseUrl}/quiz/category/${cid}`)
  }

  //get active quizzes
  public getActiveQuizzes(){
    return this.http.get(`${baseUrl}/quiz/active`)
  }

  //get active category quizzes
  public getActiveCategoryQuizzes(cid:any){
    return this.http.get(`${baseUrl}/quiz/category/active/${cid}`)
  }


}
