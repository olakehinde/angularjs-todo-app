import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-todo',
templateUrl: './todo.component.html',
})

export class TodoComponent implements OnInit {
  private data: Array<Object>

  private toggle:boolean = true;

  constructor() {
    this.data = []
    this.toggle = false;
  }

  ngOnInit() {

  }

  getTodoDetail(date: string, task:string, time: string) {
    var values: object = {}

    values["date"] = date
    values["task"] = task
    values["time"] = time

    this.data.push(values);
    console.log(values);
  }
}
