import { Stack, Typography } from "@mui/material";
import React from "react";

function ViewConfirmation() {

    // todo: remove hardcoded confirmation # in the future task
    return (
        <Stack direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ m: 4 }} >
            <Typography variant="h5" >
                Thank you for placing your order. Your order confirmation # is 123.
            </Typography>
        </ Stack>
    )
}

export default ViewConfirmation;