import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { MaterialModule } from '../shared/modules/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ManageTaskService } from './services/manage-task.service';
import { EditTaskDialogComponent } from './components/edit-task-dialog/edit-task-dialog.component';
import { ManageTasksComponent } from './pages/manage-tasks/manage-tasks.component';
import { TasksListComponent } from './containers/tasks-list/tasks-list.component';
import { CountdownModule } from 'ngx-countdown';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [
    ManageTasksComponent,
    EditTaskDialogComponent,
    TasksListComponent,
    TimerComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    SharedModule,
    CountdownModule,
  ],
  providers: [ManageTaskService],
})
export class TasksModule {}
