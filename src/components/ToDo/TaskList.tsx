import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../../model/task';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      <h2>Liste de tâches</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;