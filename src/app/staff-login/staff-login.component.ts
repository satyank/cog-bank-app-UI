import { Component, OnInit } from '@angular/core';
import { StaffLoginModel } from '../model/StaffLoginModel';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {

  constructor() { }

  staff:StaffLoginModel  = new StaffLoginModel;

  ngOnInit(): void {
  }

  authenticate(): void {

  }

}
