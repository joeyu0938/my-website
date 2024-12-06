import { useRef } from 'react'
import setting from './Settings.json';
import './Information_drawer.css'
import React, { lazy, Suspense } from 'react';
import { Fragment } from 'react'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Margin } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Aboutme from './Aboutme/Aboutme';
import Divider from '@mui/material/Divider';
import Work_exp from './Exp/Exp';
import Time_exp from './Timeline/TimeL';
import Project from './Project/project';

const Number_category = setting.Num_cat
const Topics = setting.Topics

function Information_drawer() {
  
  const MERef = useRef();
  const TimeRef = useRef();
  const ProjectRef = useRef();
  const expRef = useRef();

  const scrollToProfile = () => {
    if (MERef.current !== null){
      MERef.current.scrollIntoView({behavior: "smooth"})
    }
  }
  const scrollToTime = () => {
    if (TimeRef.current !== null){
      TimeRef.current.scrollIntoView({behavior: "smooth"})
    }
  }
  const scrollToProject = () => {
    if (ProjectRef.current !== null){
      ProjectRef.current.scrollIntoView({behavior: "smooth"})
    }
  }
  const scrollToExp = () => {
    if (expRef.current !== null){
      expRef.current.scrollIntoView({behavior: "smooth"})
    }
  }

  const function_arr = [scrollToProfile,scrollToTime,scrollToProject,scrollToExp];

  return (
    <Box justifyItems="center">
        <Box className='area2' sx={{m:'1rem' , marginBottom:'2rem'}}>
          <Breadcrumbs aria-label="breadcrumb"  sx={{color:'black',width:"90%",fontWeight:'bold',padding:'30px',display: 'flex'}} className='bread' justifyContent='flex-end' >
              {Topics.map((topic,i)=>
                <Link underline="hover" color="black" key={i} className={topic} onClick={function_arr[i]}>
                    {topic}
                </Link>
              )}
          </Breadcrumbs>
        </Box>
        <Box justifyContent="flex-start" sx={{width:"95%"}}>
          <Aboutme aboutref={MERef}></Aboutme>
          <Divider style={{width:'100%',height:'30px',borderBottomWidth: 5}} />
          <Work_exp expref={expRef}></Work_exp>
          <Divider style={{width:'100%',height:'30px',borderBottomWidth: 5}} />
          <Time_exp timepref={TimeRef}></Time_exp>
          <Divider style={{width:'100%',height:'30px',borderBottomWidth: 5}} />
          <Project projectpref={ProjectRef}></Project>
          <Divider style={{width:'100%',height:'30px',borderBottomWidth: 5}} />
        </Box>
    </Box>
    
  )
}

export default Information_drawer
