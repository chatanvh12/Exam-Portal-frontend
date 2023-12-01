import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SignupComponent } from './Pages/signup/signup.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LandingPageComponent } from './Pages/landing/landing-page.component';
import { SingninComponent } from './Pages/singnin/singnin.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptor, AuthInterceptorProviders } from './Srevices/auth.interceptor';
import {MatListModule} from '@angular/material/list';
import { UserDashboardComponent } from './Pages/user/user-dashboard/user-dashboard.component';
import { DashboardComponent } from './Pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { SidebarComponent } from './Pages/admin/sidebar/sidebar.component';
import { WelcomecompComponent } from './Pages/admin/welcomecomp/welcomecomp.component';
import { AddComponent } from './Pages/admin/add/add.component';
import { ViewComponentsComponent } from './Pages/admin/view-components/view-components.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { ViewQuizzesComponent } from './Pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from './Pages/admin/add-quizzes/add-quizzes.component';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizesComponent } from './Pages/admin/update-quizes/update-quizes.component';
import { AddQuizQuestionsComponent } from './Pages/admin/add-quiz-questions/add-quiz-questions.component';
import { ViewAuestionsComponent } from './Pages/admin/view-auestions/view-auestions.component';
import { UpdateQuizQuestionComponent } from './Pages/admin/update-quiz-question/update-quiz-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoadQuizzesComponent } from './Pages/user/load-quizzes/load-quizzes.component';
import { PostquizComponent } from './Pages/user/postquiz/postquiz.component';
import { PrequizComponent } from './Pages/user/prequiz/prequiz.component';
import { StartComponent } from './Pages/user/start/start.component';
import { UserSidebarComponent } from './Pages/user/user-sidebar/user-sidebar.component';
import { ContactComponent } from './Pages/contact/contact.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LandingPageComponent,
    SingninComponent,
    UserDashboardComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomecompComponent,
    AddComponent,
    ViewComponentsComponent,
    ViewQuizzesComponent,
    AddQuizzesComponent,
    UpdateQuizesComponent,
    AddQuizQuestionsComponent,
    ViewAuestionsComponent,
    UpdateQuizQuestionComponent,
    LoadQuizzesComponent,
    PostquizComponent,
    PrequizComponent,
    StartComponent,
    UserSidebarComponent,
    ContactComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [AuthInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
