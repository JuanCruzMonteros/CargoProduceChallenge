import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ManageTasksComponent } from './containers/manage-tasks/manage-tasks.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ManageTasksComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class TasksModule {}
