import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ManageTaskService } from '../../services/manage-task.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../../components/edit-task-dialog/edit-task-dialog.component';
import { Task } from '../../interfaces/task.model';

@Component({
  selector: 'app-manage-tasks',
  templateUrl: './manage-tasks.component.html',
  styleUrls: ['./manage-tasks.component.scss'],
})
export class ManageTasksComponent {
  taskFilter = '';

  constructor(
    public manageTaskService: ManageTaskService,
    public dialog: MatDialog
  ) {}

  newTask() {
    this.editTask(null);
  }

  editTask(task: Task): void {
    const dialogo1 = this.dialog.open(EditTaskDialogComponent, {
      data: task,
    });

    dialogo1.afterClosed().subscribe((task) => {
      if (task !== undefined) {
        this.manageTaskService.updateTask(task);
      }
    });
  }
}
