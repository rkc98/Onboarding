import React from 'react'
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import LinearSteeper from './LinearStepper';


const Onboarding = () => {
    return (
        <>
        <div className="" style={{width:" 70%",marginLeft:"15%"}}>
       <CssBaseline />
       <Container component={Box} p={4}>
         <Paper component={Box} p={3}>
           {/* <Linea /> */}
           <LinearSteeper />
         </Paper>
       </Container>
       </div>
      
     </>
    )
}

export default Onboarding
