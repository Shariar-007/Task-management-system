import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {Task} from "../../models/task.model";
import {NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskManagementService} from "../../services/task-management.service";
// import {moment} from "ngx-bootstrap/chronos/testing/chain";

@Component({
  selector: 'app-task-tab',
  templateUrl: './task-tab.component.html',
  styleUrls: ['./task-tab.component.scss']
})
export class TaskTabComponent implements OnInit {
  @Input() task: Task | null = null;
  isUpdateble = false;
  // @ts-ignore
  taskForm: FormGroup;
  readonly DT_FORMAT = "DD/MM/YYYY";

  constructor(private modalService: NgbModal, private fb: FormBuilder,
              private taskManagementService: TaskManagementService,) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      id: [''],
      title: ["", [Validators.required, Validators.maxLength(100)]],
      description: ["", [Validators.required, Validators.maxLength(150)]],
      priority: ["", Validators.required],
      startDate: ["", Validators.required],
      endDate: ["", Validators.required],
      status: ["", Validators.required],
      assignedPerson: ["", Validators.required],
      attachment: ["", ],
    });
  }

  onWatchTaskDetails(template: TemplateRef<any>) {
    this.modalService.open(template, {centered: true});
  }

  closeModal() {
    this.isUpdateble = false;
    this.modalService.dismissAll();
  }

  onDateFormat(date: NgbDateStruct): any {
    if(date) {
      return date.day + '/' + (date.month - 1 ) + '/' + date.year;
    }
    return "";
  }

  updateTask() {
    this.isUpdateble = true;
    this.taskForm.patchValue({
      id: this.task?.id,
      title: this.task?.title,
      description: this.task?.description,
      priority: this.task?.priority,
      startDate: this.task?.startDate? this.task.startDate: null,
      endDate: this.task?.endDate? this.task.endDate: null,
      status: this.task?.status,
      assignedPerson: this.task?.assignedPerson,
    });
  }


  onUpdate() {
    if (this.taskManagementService.getDataFromLocalStorage('task')) {
      if (this.taskManagementService.getDataFromLocalStorage('task') != '') {
        // @ts-ignore
        let tasks: any[] = JSON.parse(this.taskManagementService.getDataFromLocalStorage('task'));
        // @ts-ignore
        const foundedIndex = tasks.findIndex(item => item.id === this.task.id);
        tasks[foundedIndex] = this.taskForm.value;
        this.taskManagementService.setDataToLocalStorage('task', JSON.stringify(tasks));
        location.reload();
      }
    }
    this.closeModal();
  }
}
