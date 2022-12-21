import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../../models/task.model";

@Component({
  selector: 'app-task-tab',
  templateUrl: './task-tab.component.html',
  styleUrls: ['./task-tab.component.scss']
})
export class TaskTabComponent implements OnInit {
  @Input() task: Task | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
