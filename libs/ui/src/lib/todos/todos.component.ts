import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@angular-forms/data';

@Component({
  selector: 'angular-forms-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() { }

  ngOnInit(): void {
  }

}
