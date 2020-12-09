import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { StartScreenComponent } from './pages/start-screen/start-screen.component';
import { CourseSelectionScreenForRatingComponent } from './pages/course-selection-screen-for-rating/course-selection-screen-for-rating.component';
import { RateCourseScreenComponent } from './pages/rate-course-screen/rate-course-screen.component';
import { CourseSelectionScreenForViewingComponent } from './pages/course-selection-screen-for-viewing/course-selection-screen-for-viewing.component';
import { CourseProfileForViewingComponent } from './pages/course-profile-for-viewing/course-profile-for-viewing.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatSelectModule } from '@angular/material/select';

import { firebaseConfig } from './credentials';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { QuestionOneForRatingComponent } from './pages/question-one-for-rating/question-one-for-rating.component';
import { QuestionTwoForRatingComponent } from './pages/question-two-for-rating/question-two-for-rating.component';
import { QuestionThreeForRatingComponent } from './pages/question-three-for-rating/question-three-for-rating.component';
import { QuestionFourForRatingComponent } from './pages/question-four-for-rating/question-four-for-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    StartScreenComponent,
    CourseSelectionScreenForRatingComponent,
    RateCourseScreenComponent,
    CourseSelectionScreenForViewingComponent,
    CourseProfileForViewingComponent,
    RegisterComponent,
    DropdownComponent,
    QuestionOneForRatingComponent,
    QuestionTwoForRatingComponent,
    QuestionThreeForRatingComponent,
    QuestionFourForRatingComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
