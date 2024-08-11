import { useState } from 'react'
import Cat from './Cat.jsx';
import setting from './Introduction/Settings.json';
import aboutMe from "./Introduction/Aboutme.json";
import './Information_drawer.css'
import React, { lazy, Suspense } from 'react';
import { Fragment } from 'react'


const Number_category = setting.Num_cat

function Information_drawer() {
  
  const [Front,setFront] = useState(0)

  const Elements = setting.Topics.map((topic,idx)=> (
    <div  style={{ '--pos': idx ,'--num':Number_category,'--col': 'blue'}} key={idx} className="item">
      <Cat title={topic} id={idx} num={Number_category} Front={Front}></Cat>
    </div>
    )
  )
  return (
    <div className='banner'>
      <div className='slider'>
        {Elements}
      </div>
    </div>
  )
}

export default Information_drawer
