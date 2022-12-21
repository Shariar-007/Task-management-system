import {Component, Input, OnInit} from '@angular/core';
import {TaskManagementService} from "../../services/task-management.service";

@Component({
  selector: 'app-top-container',
  templateUrl: './top-container.component.html',
  styleUrls: ['./top-container.component.scss']
})
export class TopContainerComponent implements OnInit {
  @Input() name: string = "";
  @Input() tasks: any = null;

  constructor(private taskManagementService: TaskManagementService) {
  }

  ngOnInit(): void {
    console.log(this.tasks);
  }

}
