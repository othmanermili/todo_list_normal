import React, { useState } from 'react'

export default function Radiobu() {


    const [sexe,setsexe]=useState();


    


  return (
    <div style={{textAlign:'center'}}>
      <h1 className='text-warning' style={{margin:'25px',fontSize:'76px',fontWeight:'bolder'}}>radio button</h1>

        <h3>sexe est : {sexe}</h3>
      <input type="radio" name="radio1"  onClick={(e)=>{setsexe(e.target.value)}}  value="femme"  style={{margin:'10px',marginRight:'5px'}}  /> f
      
      
      
      <input type="radio" name="radio1"  onClick={(e)=>{setsexe(e.target.value)}}  value="male"  style={{margin:'10px',marginRight:'5px'}}  /> m
    
    
    
    </div>
  )
}
