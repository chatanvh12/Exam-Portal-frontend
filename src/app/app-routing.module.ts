import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Pages/signup/signup.component';
import { SingninComponent } from './Pages/singnin/singnin.component';
import { LandingPageComponent } from './Pages/landing/landing-page.component';
import { DashboardComponent } from './Pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './Pages/user/user-dashboard/user-dashboard.component';
import { adminGuard } from './Srevices/admin.guard';
import { normalGuard } from './Srevices/normalguard.guard';
import { ProfileComponent } from './Pages/profile/profile.component';
import { WelcomecompComponent } from './Pages/admin/welcomecomp/welcomecomp.component';
import { ViewComponentsComponent } from './Pages/admin/view-components/view-components.component';
import { AddComponent } from './Pages/admin/add/add.component';
import { ViewQuizzesComponent } from './Pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from './Pages/admin/add-quizzes/add-quizzes.component';
import { UpdateQuizesComponent } from './Pages/admin/update-quizes/update-quizes.component';
import { ViewAuestionsComponent } from './Pages/admin/view-auestions/view-auestions.component';
import { AddQuizQuestionsComponent } from './Pages/admin/add-quiz-questions/add-quiz-questions.component';
import { UpdateQuizQuestionComponent } from './Pages/admin/update-quiz-question/update-quiz-question.component';
import { LoadQuizzesComponent } from './Pages/user/load-quizzes/load-quizzes.component';
import { PrequizComponent } from './Pages/user/prequiz/prequiz.component';
import { StartComponent } from './Pages/user/start/start.component';
import { confirmDeactivateGuard } from './Srevices/confirm-deactivate.guard';
import { PostquizComponent } from './Pages/user/postquiz/postquiz.component';
import { ContactComponent } from './Pages/contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent,
    pathMatch:'full'
  },
  {
    path:"signup",
    component:SignupComponent,
    pathMatch: "full" 
  },
  {
    path:"login",
    component:SingninComponent,
    pathMatch:"full"
  },
  {
    path:"admin",
    component:DashboardComponent,
    canActivate:[adminGuard],
    children:[
      {
        path:"",
        component:WelcomecompComponent,
      },
      {
        path:"profile",
        component:ProfileComponent,
      },
      {
        path:"categories",
        component:ViewComponentsComponent
      },
      {
        path:"add-categories",
        component:AddComponent
      },
      {
        path:"quizzes",
        component:ViewQuizzesComponent
      },
      {
        path:"add-quiz",
        component:AddQuizzesComponent
      },{
        path:"quiz/:qId",
        component:UpdateQuizesComponent
      },{
        path:"view-questions/:qId/:title",
        component:ViewAuestionsComponent
      },{
        path:"add-questions/:qId/:title",
        component:AddQuizQuestionsComponent
      },
      {
        path:'update-questions/:qId/:title/:quesId',
        component:UpdateQuizQuestionComponent
      }
    ]
  },
  {
    path:"user-dashboard",
    component:UserDashboardComponent,
    canActivate:[normalGuard],
    children:[
      {
        path:':categoryId',
        component:LoadQuizzesComponent
      },
      {
        path:'instructions/:qid',
        component:PrequizComponent
      },
    ]
  },
  {
    path:"start/:qId",
    component:StartComponent,
    canActivate:[normalGuard],
    canDeactivate:[confirmDeactivateGuard]
  },
  {
    path:'postQuiz',
    component:PostquizComponent,
    canActivate:[normalGuard]
  },
  {
    path:"contact",
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
