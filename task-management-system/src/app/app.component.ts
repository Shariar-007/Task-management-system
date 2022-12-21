import {Component, OnInit} from '@angular/core';
import {TaskManagementService} from "./services/task-management.service";

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


  // obj: any = [
  //   {
  //   title: 'Title 1',
  //   description: 'Description',
  //   priority: 'Low',
  //   startDate: '1-1-2022',
  //   endDate: '31-1-2022',
  //   status: 'To-do',
  //   assignedPerson: 'ABC',
  //   attachment: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Danime%2Bboys&psig=AOvVaw1YN4VM__snKxIygIpqfiWs&ust=1671696819003000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiV-4miivwCFQAAAAAdAAAAABAE',
  // },
  //   {
  //     title: 'Title 2',
  //     description: 'Description',
  //     priority: 'Low',
  //     startDate: '1-1-2022',
  //     endDate: '31-1-2022',
  //     status: 'To-do',
  //     assignedPerson: 'ABC',
  //     attachment: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Danime%2Bboys&psig=AOvVaw1YN4VM__snKxIygIpqfiWs&ust=1671696819003000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiV-4miivwCFQAAAAAdAAAAABAE',
  //   },
  //   {
  //     title: 'Title 3',
  //     description: 'Description',
  //     priority: 'Low',
  //     startDate: '1-1-2022',
  //     endDate: '31-1-2022',
  //     status: 'In progress',
  //     assignedPerson: 'ABC',
  //     attachment: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Danime%2Bboys&psig=AOvVaw1YN4VM__snKxIygIpqfiWs&ust=1671696819003000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiV-4miivwCFQAAAAAdAAAAABAE',
  //   },
  //   {
  //     title: 'Title 4',
  //     description: 'Description',
  //     priority: 'Low',
  //     startDate: '1-1-2022',
  //     endDate: '31-1-2022',
  //     status: 'In progress',
  //     assignedPerson: 'ABC',
  //     attachment: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Danime%2Bboys&psig=AOvVaw1YN4VM__snKxIygIpqfiWs&ust=1671696819003000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiV-4miivwCFQAAAAAdAAAAABAE',
  //   },
  //   {
  //     title: 'Title 5',
  //     description: 'Description',
  //     priority: 'Low',
  //     startDate: '1-1-2022',
  //     endDate: '31-1-2022',
  //     status: 'Done',
  //     assignedPerson: 'ABC',
  //     attachment: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Danime%2Bboys&psig=AOvVaw1YN4VM__snKxIygIpqfiWs&ust=1671696819003000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiV-4miivwCFQAAAAAdAAAAABAE',
  //   },
  //   {
  //     title: 'Title 6',
  //     description: 'Description',
  //     priority: 'Low',
  //     startDate: '1-1-2022',
  //     endDate: '31-1-2022',
  //     status: 'Done',
  //     assignedPerson: 'ABC',
  //     attachment: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Danime%2Bboys&psig=AOvVaw1YN4VM__snKxIygIpqfiWs&ust=1671696819003000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCIiV-4miivwCFQAAAAAdAAAAABAE',
  //   },
  // ];

  constructor(private taskManagementService: TaskManagementService) {
  }

  ngOnInit(): void {
    // this.taskManagementService.setDataToLocalStorage('task', JSON.stringify(this.obj))
    if(this.taskManagementService.getDataFromLocalStorage('task') && this.taskManagementService.getDataFromLocalStorage('task') != '') {
      // @ts-ignore
      this.tasks = JSON.parse(this.taskManagementService.getDataFromLocalStorage('task'));
      console.log(this.tasks);
      this.toDoTasks = this.tasks.filter((item: { status: string; }) => item.status === 'To-do');
      this.inProgressTasks = this.tasks.filter((item: { status: string; }) => item.status === 'In progress');
      this.doneTasks = this.tasks.filter((item: { status: string; }) => item.status === 'Done');
    }

  }




}
