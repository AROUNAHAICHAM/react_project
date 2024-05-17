import 'bootstrap/dist/css/bootstrap.min.css';
import { Task } from '../../model/task';


interface TaskItemProps {
    task: Task;
  }

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    
    return (
      <div>
        <input type="checkbox" checked={task.completed}  />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
      </div>
    );
  };

export default TaskItem;