import React from "react"
import { TextField,Button} from "@mui/material"
export const Emp=()=>{
   return(
      <div className="sub">
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined"  />
      <Button variant="contained">Submit</Button>
      <Button variant="contained">cancel</Button>
      
      
      </div>
   )
}