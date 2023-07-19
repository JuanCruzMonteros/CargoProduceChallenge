import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../../interfaces/task.model';
import { Priority } from '../../enums/priority.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss'],
})
export class EditTaskDialogComponent {
  taskForm: FormGroup;
  public PriorityEnum = Priority;

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task
  ) {
    if (data?.id >= 0) {
      this.makeNewForm(data?.id, data?.name, data?.priority);
    } else {
      this.makeNewForm(null, '', Priority.LOW);
    }
  }

  makeNewForm(id: number, name: string, priority: string) {
    this.taskForm = new FormGroup({
      id: new FormControl(id),
      name: new FormControl(name, [Validators.required]),
      priority: new FormControl(priority, Validators.required),
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  saveTask() {
    let newTask: Task = {
      id: this.taskForm.get('id').value,
      name: this.taskForm.get('name').value,
      priority: this.taskForm.get('priority').value,
    };
    this.dialogRef.close(newTask);
  }

  showFormTitle() {
    if (isNaN(this.taskForm.get('id').value)) {
      return 'New Task:';
    } else {
      return `Task: ${this.taskForm.get('id').value}`;
    }
  }
}
