import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  //get all questions of quiz
  public getQuizQuestions(qId:any){
    return this.http.get(`${baseUrl}/question/quiz/all/${qId}`)
  }

  //get all questions for test
  public getQuizQuestionsForTest(qId:any){
    return this.http.get(`${baseUrl}/question/quiz/${qId}`)
  }

  //add Questions to quiz
  public addQuestionsToQuiz(Questions:any){
    return this.http.post(`${baseUrl}/question/`,Questions)
  }

  //delete Questions
  public deleteQuestion(qid:any){
    return this.http.delete(`${baseUrl}/question/${qid}`)
  }

  //get Question
  public getQuestion(qid:any){
    return this.http.get(`${baseUrl}/question/${qid}`)
  }

  //update Question
  public updateQuestion(Question:any,qid:any){
    return this.http.put(`${baseUrl}/question/`,Question)
  }

  //eval quiz
  public evalquiz(Question:any,qId:any){
    return this.http.post(`${baseUrl}/question/eval-quiz/${qId}`,Question)
  }
}
