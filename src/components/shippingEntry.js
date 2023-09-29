import { Button, FormControl, InputLabel, Input, Stack } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ShippingEntry() {

const location = useLocation();
const navigate = useNavigate();

    const handleClick = () => {
        navigate("purchase/shippingEntry", {
            order: location.state.order,
            setOrder: location.state.setOrder
        });
    }

    return (
        <Stack direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ m: 4 }} >
            <FormControl>
                <InputLabel htmlFor="">Name</InputLabel>
                <Input id="name-input" onChange={(e) => {
                    location.state.order.name = e.target.value;
                }} aria-describedby="name-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="">Address Line 1</InputLabel>
                <Input id="address-line-1-input" onChange={(e) => {
                    location.state.order.addressLine1 = e.target.value;
                }} aria-describedby="address-line-1-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="">Address Line 2</InputLabel>
                <Input id="address-line-2-input" onChange={(e) => {
                    location.state.order.addressLine2 = e.target.value;
                }} aria-describedby="address-line-2-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="">City</InputLabel>
                <Input id="city-input" onChange={(e) => {
                    location.state.order.city = e.target.value;
                }} aria-describedby="city-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="">State</InputLabel>
                <Input id="state-input" onChange={(e) => {
                    location.state.order.state = e.target.value;
                }} aria-describedby="stateinput" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="">Zip Code</InputLabel>
                <Input id="zip-input" onChange={(e) => {
                    location.state.order.zip = e.target.value;
                }} aria-describedby="zip-input" />
            </FormControl>
            <Button variant="contained" onClick={handleClick}>Comfirm</Button>
        </ Stack>
    )
}

export default ShippingEntry;