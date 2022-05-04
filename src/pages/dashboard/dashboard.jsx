import React from 'react'
import like from '../../assets/icons/like.svg';
import newmember from '../../assets/icons/new member.svg';
import sales from '../../assets/icons/sales.svg';
import cart from '../../assets/icons/cart.svg';
import {useState, useEffect } from 'react';
import CommonPageWrap from '../../containers/commonPageWrap/commonPageWrap'
import './dashboard.css'
import  MyChart from '../../components/chart/MyChart'
import MonthlySales from '../../components/chart/MonthlySales'
import Doughnut from '../../components/chart/Doughnut'

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '../../components/card/Card';

import WebsiteAnalysis from '../../components/chart/WebsiteAnalysis'

const DashBoard = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const cards = [["Total Profit", cart, 'crimson', '', '4500k'], ["Likes", like, 'green', '', '800'], ["Sales", sales, 'violet', '', '400'],["New members", newmember, 'orange', '', '280']];
 
  return (
    <div>
       <CommonPageWrap>
         {cards.map((cd, i) => {
           return <Card key={i} className={cd[4]} cardName={cd[0]} cardImg={cd[1]} bgColor={cd[2]} views={cd[4]}
            />
         }) }

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
