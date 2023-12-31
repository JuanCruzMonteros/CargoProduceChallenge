import { Priority } from '../enums/priority.enum';

export interface Task {
  id?: number;
  name: string;
  timeSpent?: number;
  priority: Priority;
  isDone?: boolean;
}
