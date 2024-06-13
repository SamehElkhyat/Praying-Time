import React from 'react'
import Content from './Content/page.jsx'
import { Container } from '@mui/material'
import { green } from '@mui/material/colors'

export default function page() {
  return (<>
    <div style={
      {
       
        position:"absolute"    ,
        top:"150px",
        right:"200px",

        justifyContent:"center",
        display:"flex",
        width:"80vw"
  
  
      }}>
        <Container maxWidth="xl">
  
        <Content/>

        
        </Container>
        
        
        </div>
    </>)
}
