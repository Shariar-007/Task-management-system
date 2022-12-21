import {Component, OnInit, TemplateRef} from '@angular/core';
import {TaskManagementService} from "./services/task-management.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
// import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task-management-system';

  tasks: any = [];
  toDoTasks: any;
  inProgressTasks: any;
  doneTasks: any;
  // @ts-ignore
  taskForm: FormGroup;

  // private toast: ToastrService,
  constructor(private taskManagementService: TaskManagementService,
              private modalService: NgbModal, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.tasks = [];
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

    // this.taskManagementService.setDataToLocalStorage('task', JSON.stringify(this.obj))
    if(this.taskManagementService.getDataFromLocalStorage('task') && this.taskManagementService.getDataFromLocalStorage('task') != '') {
      // @ts-ignore
      this.tasks = JSON.parse(this.taskManagementService.getDataFromLocalStorage('task'));
      // console.log(this.tasks);
      this.toDoTasks = this.tasks.filter((item: { status: string; }) => item.status === 'toDo');
      this.inProgressTasks = this.tasks.filter((item: { status: string; }) => item.status === 'inProgress');
      this.doneTasks = this.tasks.filter((item: { status: string; }) => item.status === 'done');
    }

  }


  onAddTusk(template: TemplateRef<any>) {
    this.modalService.open(template, {centered: true});
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  onCreateTask() {
    if(this.taskManagementService.getDataFromLocalStorage('task') && this.taskManagementService.getDataFromLocalStorage('task') != '') {
      // @ts-ignore
      let tasks: any[] = JSON.parse(this.taskManagementService.getDataFromLocalStorage('task'));
      this.taskForm.get('id')?.setValue(Math.floor((Math.random() * 1000)));
      tasks.push(this.taskForm.value);
      this.taskManagementService.setDataToLocalStorage('task', JSON.stringify(tasks));
      this.ngOnInit();
    } else {
      let tasks = [];
      this.taskForm.get('id')?.setValue(Math.floor((Math.random() * 1000)));
      tasks[0] = this.taskForm.value;
      this.taskManagementService.setDataToLocalStorage('task', JSON.stringify(tasks));
      this.ngOnInit();
    }
    this.closeModal();
  }

  onFileChange(event: any) {
    if (event?.target?.files?.length > 0) {
      const file = event.target.files[0];
      this.taskForm.patchValue({
        attachment: file
      });
    }
  }
}
