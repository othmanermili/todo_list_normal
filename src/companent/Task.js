import React, { useRef } from 'react'
import "./task.css"
export default function Task({txt,fundel}) {



  const style_task=useRef();

  function termine(){
    style_task.current.classList.add('termine');
    document.getElementById('supp').disabled=true;
    document.getElementById('term').disabled=true;
  }



  return (
    <>
      <div ref={style_task}>
      <input type="text"  value={txt}  readOnly   className='input_task'  />    <input type="button" value="supprimer"  id='supp' className='button_task btn_supp'   onClick={fundel}  />   
           <input type="button" value="terminée"   className='button_task btn_ter'  id='term'   onClick={termine}   />
      </div>
    </>
  )
}
