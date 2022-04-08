
import React from 'react'
import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'
import './dashboard.css'
import  MyChart from '../../components/chart/MyChart'
import MonthlySales from '../../components/chart/MonthlySales'
import Doughnut from '../../components/chart/Doughnut'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import WebsiteAnalysis from '../../components/chart/WebsiteAnalysis'



const DashBoard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      
      <CommonPageWrap>
      <div className='card-container'>
           <div className='card-1'>
           <h1>New Order</h1>
            </div> 
            
        </div>
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item><MyChart/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><MonthlySales/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><WebsiteAnalysis/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><Doughnut/></Item>
        </Grid>
      </Grid>
    </Box>
        
        
       
     
     
      </CommonPageWrap>
    </div>
  )

  }
export default DashBoard;
