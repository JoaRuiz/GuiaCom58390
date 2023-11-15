import React, { useState, useEffect } from 'react';

function TareasFiltradas() {
 
    const [tasks, setTasks] = useState([]);

    const [filter, setFilter] = useState('all');


    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) =>{
        if (!response.ok){
            throw new Error('Error al cargar las tareas');
        }
        return response.json();
      })
      .then((data) =>{
       const filteredTasks = data.filter((t)=>{
           if( filter === 'all'){
            return true;
           }
           return filter === 'completed' ? t.completed : !t.completed;
        });
        setTasks(filteredTasks);
      })
      .catch((error)=>{
        console.error('Error', error);
      })

    }, [filter]);

  return (
    <div>
      <h2>Lista de tareas: ({filter})</h2>
      <div>
        <button onClick={()=> setFilter('all')}>Todas</button>
        <button onClick={()=> setFilter('pending')}>Pendientes</button>
        <button onClick={()=> setFilter('completed')}>Completas</button>
      </div>
      <ul>
       {tasks.map((t)=>(
        <li key={t.id}>
           {t.title} - {t.completed ? 'Completada' : 'Pendiente'}
        </li>
       ))}
      </ul>
    </div>
  );
}

export default TareasFiltradas
