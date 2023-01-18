import React, { useState } from 'react'
import "./formatasks.css"
import Task from './Task'
import {v4 as uuidv4} from 'uuid'
export default function Formatasks() {

    const [tasks,settasks]=useState([
        {id:uuidv4(),nom:'sport'},
        {id:uuidv4(),nom:'film'},
        {id:uuidv4(),nom:'coder en react'}
    ])


    


    const [task,settask]=useState('');



    function addtask(){
        let ntasks=[...tasks];
        let ntask={};
        ntask.id=uuidv4();
        ntask.nom=task;
        ntasks.push(ntask);
        settasks(ntasks);
        settask("");
    };


    function supptask(id){
        let ntasks = tasks.filter((a)=>{
            return a.id !== id;
        })
        settasks(ntasks);
    }


    

  return (
    <div>
      
        



        <form>
            <div className='a'>Entrer une tache : </div><br />
            <input type="text"  className='input_task'  value={task}  onChange={(a)=>{settask(a.target.value)}}  placeholder='Entrer une tache' />    
              <input type="button"  onClick={addtask}   className='button_task btn_ajouter'  value="Ajouter" />


        </form>
        <br />
        <br />
        <br />
        <h1 style={{color:'darkorange',fontWeight:'bolder'}}>La listes des tasks</h1>
        {
        tasks.map((t)=>{
            return <Task  key={t.id}  txt={t.nom}  fundel={()=>supptask(t.id)}/>
        })
        }
    </div>
  )
}
