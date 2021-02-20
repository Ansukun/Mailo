import React from "react";
import {
  Divider,
  Grid,
  Button
} from "@material-ui/core";

export default class MobileRes extends React.Component{
  render(){
    return(
      <Grid container>
        hello
        <Button 
        variant = "contained"
        color = "secondary">
          hey buddy
        </Button>

      </Grid>
    )
  }
}