import React, { useState } from 'react'
import "./select_style.css"
export default function Select() {
    const [villes,setvilles]=useState(
        [
            'tanger',
            'oujda',
            'assilah'
        ]
    );
    const [ville,setville]=useState("");
    
    
    
    
    const [ville_supp,setville_supp]=useState("");





    function add(){
      setvilles([...villes,ville]);
      setville("");
    };


    function supp(){
      setvilles(villes.filter(A => A !== ville_supp));
      setville_supp("");
    }
  return (
    <div style={{textAlign:'center'}}>
      <h1  style={{margin:'25px',fontSize:'76px',fontWeight:'bolder'}} className='text-danger'>select</h1>


        <select name="ville"  style={{border:'none',fontSize:'28px',color:'blue',}}  >


        {
            villes.map((a)=>{
                return <option value={a} className='option-style' >{a}</option>
            })
        }


        </select><br /><br />


        <label htmlFor="">Entrer une ville : </label><br />
        <input type="text" value={ville} onChange={(e)=>{setville(e.target.value)}}  className='input'  placeholder='ville pour ajouter' /><br />


        <button onClick={add} className='button'>Ajouter</button><br /><br />



        <input type="text" value={ville_supp} onChange={(e)=>{setville_supp(e.target.value)}}  className='input'  placeholder='ville pour supprimer'  /><br />

        <button onClick={supp} className='button'>Supprimer</button>

    </div>
  )
}
