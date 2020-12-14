import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Professor{
  name: string;
  viewName: string
}

@Component({
  selector: 'app-question-one-for-rating',
  templateUrl: './question-one-for-rating.component.html',
  styleUrls: ['./question-one-for-rating.component.css']
})
export class QuestionOneForRatingComponent {

  // to be used in html file to know when professor item in dropdown has been selected
  public selectedProfessor: string;

  constructor(private router: Router) {}

  // navigate to question two
  goToNext() {
    this.router.navigate([`${'/question-two-for-rating'}`]);
  }

  professors: Professor[] = [
    {name: 'Keith Vander Linden', viewName: 'Keith Vander Linden'},
    {name: 'Victor Norman', viewName: 'Victor Norman'},
    {name: 'Joel Adams', viewName: 'Joel Adams'},
  ];

}