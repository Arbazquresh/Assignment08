import React from "react"
import {Grid, Button, TextField} from "@mui/material"
export const Color=()=>{

    return(
        <div className="sub">
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <Button variant="contained"  color="error" fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={6}>
        <Button variant="contained"  color="error"fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={4}>
        <Button variant="contained" fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={4}>
        <Button variant="contained" fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={4}>
        <Button variant="contained" color="secondary" fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={8}>
        <Button variant="contained" color="secondary" fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={4}>
        <Button variant="contained" fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={4}>
        <Button variant="contained"  color="success" fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={8}>
        <Button variant="contained" color="success" fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={3}>
        <Button variant="contained" fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={3}>
        <Button variant="contained" fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={3}>
        <Button variant="contained" fullWidth>Item1</Button>
        </Grid>

        <Grid item xs={3}>
        <Button variant="contained" fullWidth>Item1</Button>
        </Grid>
        
        </Grid>
        
        </div>
    )
}