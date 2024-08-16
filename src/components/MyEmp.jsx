import React from "react"
import {Button,TextField,Grid} from "@mui/material" 
export const MyEmp=()=>{
    
 return(
        <div className="sub">
<Grid  container spacing={2}>
<Grid item xs={4}>
<TextField variant="outlined" label="First Name" fullWidth/>
</Grid>
<Grid item xs={4}>
<TextField variant="outlined" label="last Name" fullWidth/>
</Grid>
<Grid item xs={4}>
<TextField variant="outlined" label="City" fullWidth/>
</Grid>

 <Grid item xs={6}>
 <Button variant="contained"color="success" fullWidth>Submit</Button>
 </Grid>

 <Grid item xs={6}>
 <Button variant="contained"color="success" fullWidth>Cancel</Button>
 </Grid>

 <Grid item xs={5}>
 <Button variant="contained" fullWidth>Cancel</Button>
 </Grid>

 <Grid item xs={2}>
 <Button variant="contained" color="error" fullWidth>Cancel</Button>
 </Grid>

 <Grid item xs={5}>
 <Button variant="contained"  fullWidth>Cancel</Button>
 </Grid>

 <Grid item xs={6}>
 <Button variant="contained" fullWidth>Cancel</Button>
 </Grid>
 <Grid item xs={6}>
 <Button variant="contained"  fullWidth>Cancel</Button>
 </Grid>

 <Grid item xs={5}>
 <Button variant="contained" color="success" fullWidth>Cancel</Button>
 </Grid>

 <Grid item xs={2}>
 <Button variant="contained" color="error" fullWidth>Cancel</Button>
 </Grid>

 <Grid item xs={5}>
 <Button variant="contained"color="success" fullWidth>Cancel</Button>
 </Grid>



</Grid>





        </div>
    )
}