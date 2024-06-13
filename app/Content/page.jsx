 "use client"
 import { Divider, FormControl, Grid, Input, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../Content/Content.css'
import Prayer from "../Prayer/page"
import elfagr from '../img/fajr-prayer.png'
import eldohr from '../img/dhhr-prayer-mosque.png'
import elasr from '../img/asr-prayer-mosque.png'
import elmaghreb from '../img/sunset-prayer-mosque.png'
import elashaa from '../img/night-prayer-mosque.png'
import moment from 'moment'
import { motion } from "framer-motion";
import axios from 'axios'

export default function page() {

const [Timing, setTiming] = useState({})
const [timingCity, setTimingcity] = useState("cairo")
const [date, setDate] = useState()
const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);


const getTiming=async ()=>{

  const response=await axios.get(`https://api.aladhan.com/v1/timingsByCity?country=EG&city=${timingCity}`)
  setTiming(response.data.data.timings)
  console.log(response);


}


const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};


const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};


const changeTimingcity= (event)=>{

  setTimingcity(event.target.value)

}


useEffect(() => {
  getTiming()

  const t= moment();
  setDate(t.format("MMM Do YYYY | h:mm"))
 
}, [timingCity])





  return (<>

<Grid className='Container' container>

<Grid xs={6}>
  <div>

    <h2>{date}</h2>
    <h1>{timingCity}</h1>

  </div>

</Grid>

</Grid>

<div style={{margin:"30px"}} className="div"><Divider style={{backgroundColor:"white",}}/>
<Divider style={{backgroundColor:"white",}}/>
<Divider style={{backgroundColor:"white",}}/></div>
<Stack direction="row" style={{justifyContent:"space-between",padding:"10px"}}>

    <motion.div
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
  <motion.div  className="item" variants={item}>

<Prayer  image={elfagr} timing={Timing.Fajr} props={"الفجر"} city={timingCity}/>

  </motion.div>

<motion.div  className="item" variants={item}>

<Prayer image={eldohr} timing={Timing.Dhuhr} props={"الضهر"}/>
            
  </motion.div>
                              
<motion.div  className="item" variants={item}>

<Prayer image={elasr} timing={Timing.Asr} props={"العصر"}/>
                                          
  </motion.div>

<motion.div  className="item" variants={item}>

<Prayer image={elmaghreb} timing={Timing.Maghrib} props={"المغرب"}/>
    
  </motion.div>

<motion.div  className="item" variants={item}>

<Prayer image={elashaa} timing={Timing.Isha} props={"العشاء"}/> 
                                          
 </motion.div>
 
  </motion.div>


</Stack>



<Stack style={{color:"white",margin:"30px"}}  direction={"row"} justifyContent={"center"} sx={{ minWidth: 150 }}>
      <FormControl justifyContent={"center"}  style={{width:"20%"}} >
        <InputLabel id="demo-simple-select-label">المدينه</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={changeTimingcity}
          label="Age"
        >
          <MenuItem onChange={getTiming} value={"Banī Suwayf"}>بني سويف</MenuItem>
          <MenuItem value={"Al Minyā"}>المنيا</MenuItem>
          <MenuItem value={"Sohag"}>سوهاج</MenuItem>
          <MenuItem value={"Al Jīzah"}>الجيزه</MenuItem>
          <MenuItem value={"Qinā"}>قنا</MenuItem>
          <MenuItem value={"Aswan"}>اسوان</MenuItem>
          <MenuItem value={"Luxor"}>الأقصر</MenuItem>
          <MenuItem value={"Alexandria"}>الاسكندريه</MenuItem>
          <MenuItem value={"Qalyubia"}>القليوبيه</MenuItem>
          <MenuItem value={"Gharbia"}>الغربيه</MenuItem>
          <MenuItem value={"Port Said"}>بور سعيد</MenuItem>
          <MenuItem value={"Suez"}>السويس</MenuItem>
          <MenuItem value={"Dakahlia"}>الدقهليه</MenuItem>
          <MenuItem value={"Asyut"}>اسيوط</MenuItem>
          <MenuItem value={"Faiyum"}>الفيوم</MenuItem>
          <MenuItem value={"Sharqia"}>الشرقيه</MenuItem>
          <MenuItem value={"Ismailia"}>الاسماعيلية</MenuItem>




          
          


          

        </Select>
      </FormControl>
    </Stack>


   

</>
  )
}
