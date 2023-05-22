import { Component, OnInit } from '@angular/core';

export interface IStudent {
  name: string;
  gender: string;
  country: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  students: IStudent[] = [];
  searchString = '';

  ngOnInit(): void {
    fetch('./assets/data/students.json')
      .then((res) => res.json())
      .then((json) => {
        this.students = json;
      });
  }
}
