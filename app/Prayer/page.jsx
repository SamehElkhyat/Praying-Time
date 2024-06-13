import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Image from 'next/image';




export default function ImgMediaCard({props,timing,image}) {


  return (
    <Card style={{padding:"30px",justifyContent:"space-around"}} xl={{ maxWidth: 345 }}>
      <CardMedia
        height="140"
      />
      <Image src={image} width={150} height={150} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props}
        </Typography>
        <Typography style={{textAlign:'center',fontWeight:"600"}} variant="h3" color="text.dark">
        {timing}
        </Typography>
      </CardContent>

    </Card>
  );
}