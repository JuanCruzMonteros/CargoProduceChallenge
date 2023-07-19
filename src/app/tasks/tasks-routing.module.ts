import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageTasksComponent } from './containers/manage-tasks/manage-tasks.component';

const routes: Routes = [
	{
		path: '',
		component: ManageTasksComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
