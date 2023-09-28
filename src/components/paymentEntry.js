import { Button, FormControl, InputLabel, Input, Stack } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentEntry() {

    const [order, setOrder] = useState({
        creditCardNumber: "",
        expirationDate: "",
        cvvCode: "",
        cardHolderName: ""
    });

    const navigate = useNavigate;

    const handleClick = () => {
        navigate("/purchase/shippingEntry", {
            order: order,
            setOrder: setOrder
        });
    }

    return (
        <Stack direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ m: 4 }} >
            <FormControl>
                <InputLabel htmlFor="">Credit Card Nnumber</InputLabel>
                <Input id="credit-card-number-input" onChange={(e) => {
                    order.creditCardNumber = e.target.value;
                }} aria-describedby="credit-card-number-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="">Expiration Date</InputLabel>
                <Input id="expiration-date-input" onChange={(e) => {
                    order.expirationDate = e.target.value;
                }} aria-describedby="expiration-date-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="">cvv Code</InputLabel>
                <Input id="cvv-code-input" onChange={(e) => {
                    order.cvvCode = e.target.value;
                }} aria-describedby="cvv-code-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="">Card Holder Name</InputLabel>
                <Input id="card-holder-name-input" onChange={(e) => {
                    order.cardHolderName = e.target.value;
                }} aria-describedby="card-holder-name-input" />
            </FormControl>
            <Button variant="contained" onClick={handleClick}>Comfirm</Button>
        </ Stack>
    )
}

export default PaymentEntry;