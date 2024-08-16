import { Button,Grid, TextField, Card,CardContent } from "@mui/material"
import React, {useState} from "react"

export const Signup=()=>{
const[username,setUsername]=useState("")
const [email,setEmail]=useState("")
const [mobile,setMobile]=useState(0)
const [password, setPassword]=useState("")
const [confirmpassword,setConfirmpassword]=useState("")

const handleClear=()=>{
    setUsername("")
    setEmail("")
    setMobile("")
    setPassword("")
    setConfirmpassword("")
}
    return(
        <div className="sub">
        <Grid container spacing={2}>
    

        <Grid item xs={4}>
        
        <Card >
        <CardContent>
        <Grid container spacing={2}>

        <Grid item xs={12}>
        <h2>Sign in</h2>
        </Grid>

        <Grid item xs={12}>
        <TextField value={username} onChange={(e)=>setUsername(e.target.value)} variant="outlined" label="Username" fullWidth/>
        </Grid>

        <Grid item xs={12}>
        <TextField value={email} onChange={(e)=>setEmail(e.target.value)} variant="outlined" label="E-mail" fullWidth/> 
        </Grid>

        <Grid item xs={12}>
        <TextField value={mobile} onChange={(e)=>setMobile(e.target.value)} variant="outlined" label="Mobile-No" fullWidth/> 
        </Grid>

        <Grid item xs={6}>
        <TextField value={password} onChange={(e)=>setPassword(e.target.value)} variant="outlined" label="Password" fullWidth/>
        </Grid>

        <Grid item xs={6}>
        <TextField value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} variant="outlined" label=" Confirm-Password" fullWidth/>
        </Grid>

        <Grid item xs={6}>
        </Grid>

        <Grid item xs={3}>
        <Button variant="contained"  label="Submit">Submit</Button>
        </Grid>
       
        <Grid item xs={3}>
        <Button variant="contained" onClick={handleClear} color="error" label="Cancel">Cancel</Button>
        </Grid>

        </Grid>
        </CardContent>
        </Card>

        </Grid>
       <Grid item xs={8}>
       <Card>
       <CardContent>
       <Grid container spacing={3}>
         <Grid item xs={4}><h3>User Name :</h3></Grid>
         <Grid item xs={8}><h3>{username}</h3></Grid>
         <Grid item xs={4}><h3> Email-Id :</h3></Grid>
         <Grid item xs={8}><h3>{email}</h3></Grid>
         <Grid item xs={4}><h3>Mobile No:</h3></Grid>
         <Grid item xs={8}><h3>{mobile}</h3></Grid>
         <Grid item xs={4}><h3>Password:</h3></Grid>
         <Grid item xs={8}><h3>{password}</h3></Grid>
         <Grid item xs={4}><h3> Confirm Password:</h3></Grid>
         <Grid item xs={8}><h3>{confirmpassword}</h3></Grid>
         </Grid>
         
       </CardContent>
       </Card>
       </Grid>
        </Grid>
        
        
        
        </div>
    )
}