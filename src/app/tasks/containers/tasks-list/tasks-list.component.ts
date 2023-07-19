import { Component, EventEmitter , Input, Output } from '@angular/core';
import { Task } from '../../interfaces/task.model';
import { ManageTaskService } from '../../services/manage-task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  columnsToDisplay: string[] = [
    'id',
    'name',
    'priority',
    'Spend time',
    'Remaining time',
    'Edit',
  ];

  constructor(private manageTaskService: ManageTaskService) {}

  filteredTask: Task[] = [];
  tasks: Task[] = [];
  @Input() set taskList(values: Task[]) {
    this.tasks = [...values];
    this.loadTask();
  }

  filter: string;
  @Input() set taskFilter(filter: string) {
    this.filter = filter.length > 2 ? filter : '';
    this.loadTask();
  }

  @Input() totaltime: number;
  @Output() editTask: EventEmitter<any> = new EventEmitter();

  loadTask() {
    this.filteredTask = this.tasks.filter((task) =>
      task.name.toUpperCase().includes(this.filter.toUpperCase())
    );
  }

  showSpentTime(task: Task) {
    const minutes = Math.floor(task.timeSpent / 60);
    const seconds = task.timeSpent - minutes * 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }

  getNewSpentTime(newSpentTime: number, task: Task) {
    const updateTask: Task = { ...task, timeSpent: newSpentTime };
    this.manageTaskService.updateTask(updateTask);
  }

  editSelectedTask(task: Task) {
    this.editTask.emit(task);
  }
}
