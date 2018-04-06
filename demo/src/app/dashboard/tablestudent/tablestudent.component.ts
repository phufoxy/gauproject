import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablestudent',
  templateUrl: './tablestudent.component.html',
  styleUrls: ['./tablestudent.component.scss']
})
export class TablestudentComponent implements OnInit {
  public isCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
