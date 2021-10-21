import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useHistory } from "react-router-dom";
import dataSlider from './dataSlider'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function RowAndColumnSpacing() {
    const history = useHistory();
    const [slideIndex, setSlideIndex] = useState(1)

    const routeChange = index =>{ 
        let path = `newPath`;         
        // if(slideIndex !== dataSlider.length){
        //     setSlideIndex(slideIndex + 1)
        // } 
        // else if (slideIndex === dataSlider.length){
        //     setSlideIndex(1)
        // }
        for (var slideIndex = 1; slideIndex < 4; slideIndex++) {
            history.push(process.env.PUBLIC_URL + `/files/siriusMagazine${slideIndex}.pdf`);
        }
    }
  return (
    <Box sx={{ width: '100%', height: '100%' }} 
        style={{ 
            direction:"rtl", 
            display: "block", 
            maxWidth: "1350px", 
            marginLeft: "auto", 
            marginRight: "auto" 
        }}>
            <h1 style={{ marginRight: "100px", marginTop: "20px", marginBottom: "20px" }} >أعداد المجلة</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} 
        style={{ 
            zIndex: "1", 
            position: "inherit", 
            marginBottom: "100px", 
            maxWidth: "800px", 
            maxHeight: "400px",
            marginLeft: "100px",  
            marginRight: "100px",
            // marginTop: "100px",
        }}>
        <Grid item xs={6} style={{ display: "flex", position: "relative" }} >
          {/* <Item> */}
          {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    // className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    // style={{ display: "column"}}
                    >
                        <Grid>
                            <Item style={{ display: "column", margin: "10px" }} >
                                <img 
                                    style={{ borderRadius: "5px", maxWidth: "700px", maxHeight: "300px", transform: "rotate(1deg)"}}
                                    src={process.env.PUBLIC_URL + `/num/num${index + 1}.jpg`} 
                                />
                                
                                <Link 
                                    to={process.env.PUBLIC_URL + `/files/siriusMagazine${index + 1}.pdf`}
                                    style = {{ color: "rgb(13, 134, 233)", textDecoration: "none" }}
                                >
                                    <h1>{obj.title}</h1>
                                    <p style={{ color: "black" }}>{obj.subTitle}</p>
                                    <Button style={{ backgroundColor: "rgb(13, 134, 233)", color: "white", marginTop: "8px" }}>
                                        تحميل المجلة
                                    </Button>
                                </Link>
                            </Item>
                        </Grid>
                    </div>
                )
            })}
                {/* <img style={{ maxWidth: "500px", maxHeight: "200px" }}
                    src={process.env.PUBLIC_URL + `/num/num${slideIndex}.jpg`} 
                /> */}
          {/* </Item> */}
        </Grid>
        {/* <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}

// export default Number;
