
import React, { useState, FormEvent, ChangeEvent } from 'react';

const addItem: React.FC = () => {
    const [taskData, setTask] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  
   
  
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsSubmitted(true);
  
    };
  
    return (
      <>
        <div className=' w-50  card'>
          <div className='customFormTitle card-header bg-secondary text-white'>
            <h3>Formulaire d'enregistrement  de tache </h3>
          </div>
          <div className='ml-3  card-body'>
            <form action="" onSubmit={handleSubmit}>
              <div className='mb-3 '>
                <label htmlFor="" className='me-5'>Task :</label>
                <input type="text" name="task" id="task" className='' value={taskData}  />
              </div>
              
              <div className=''>
                <input type="submit" value="Soumettre " className='me-3 btn btn-primary' />
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
export default addItem