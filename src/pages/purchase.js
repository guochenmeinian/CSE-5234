import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { ItemContext } from '../context/itemContext';


function Purchase() {

  const { items } = useContext(ItemContext);
  

  return (
    <Box
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ p: 2 }}
      my={5}
    >
      
    </Box>
  );
}

export default Purchase;
