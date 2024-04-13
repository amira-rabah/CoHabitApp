import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Maintain } from '../Maintain';


@Component({
  selector: 'app-edit-maintain',
  templateUrl: './edit-maintain.component.html',
  styleUrl: './edit-maintain.component.css'
})
export class EditMaintainComponent implements OnInit{

  maintain : Maintain | undefined ;

  constructor(
    private activateRoute:ActivatedRoute,

  ){}

  ngOnInit(): void {
      this.maintain = this.activateRoute.snapshot.data['maintain'];
      console.log(this.maintain);
  }
}
