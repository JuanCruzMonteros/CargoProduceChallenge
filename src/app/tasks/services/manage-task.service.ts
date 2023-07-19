import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.model';
import { BehaviorSubject, Observable, of, share } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ManageTaskService {
  private MAX_TIME = 1800;

  private baseAPI: string = 'http://localhost:3000/tasks';

  taskList$: Observable<Task[]>;
  private taskListSubject$ = new BehaviorSubject<Task[]>([]);

  totalTime$: Observable<number>;
  constructor(private http: HttpClient) {
    this.taskList$ = this.taskListSubject$.asObservable();
    this.calculateTotalTime();
  }

  getTasks(): void {
    const result = this.http.get<Task[]>(this.baseAPI).pipe(share());
    result.subscribe((response) => {
      this.taskListSubject$.next(response);
    });
  }

  updateTask(updateTask: Task): void {
    const list = this.taskListSubject$.getValue();
    const index = list.findIndex((obj) => obj.id === updateTask.id);

    if (index !== -1) {
      const updatedObject = { ...list[index], ...updateTask };
      const updatedList = [...list];
      updatedList[index] = updatedObject;
      this.taskListSubject$.next(updatedList);

      const result = this.http.put<Task>(
        `${this.baseAPI}/${updateTask.id}`,
        updatedObject
      );

      result.subscribe((response) => {});
    } else {
      this.createNewTask(updateTask);
    }
  }

  createNewTask(task: Task) {
    let newTask = task;
    newTask.timeSpent = 0;
    newTask.isDone = false;

    const result = this.http.post<Task>(`${this.baseAPI}`, task);
    result.subscribe((response) => {
      this.getTasks();
    });
  }

  calculateTotalTime(): void {
    this.taskListSubject$.subscribe((tasks) => {
      this.totalTime$ = of(
        tasks.reduce((totalTime, taskTime) => totalTime + taskTime.timeSpent, 0)
      );
    });
  }
}
