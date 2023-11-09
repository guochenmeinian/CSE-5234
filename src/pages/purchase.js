import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { ItemContext } from '../context/itemContext';


function Purchase() {

  const {products} = useContext(ItemContext) || {}; // bug: context is just null for no unknown reason

  if (false) {
    return <h3>No Item Available</h3>
  }

  return (
      <h1>hi</h1>
  );
}

export default Purchase;
