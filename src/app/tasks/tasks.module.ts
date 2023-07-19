import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ManageTasksComponent } from './containers/manage-tasks/manage-tasks.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ManageTaskService } from './services/manage-task.service';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';

@NgModule({
  declarations: [ManageTasksComponent, EditTaskDialogComponent],
  imports: [CommonModule, TasksRoutingModule, MaterialModule, SharedModule],
  providers: [ManageTaskService],
})
export class TasksModule {}
