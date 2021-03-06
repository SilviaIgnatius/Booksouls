import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import BookListHome from './BookListHome';
import GetMobileApp from './GetMobileApp';
import BookSoulsDef from './BookSoulsDef';
import WhyShouldBookSouls from './WhyShouldBookSouls';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));
  const style = {
    root: {
      minWidth: 275,
      backgroundImage: `url(https://i.pinimg.com/originals/04/5c/70/045c70e3dcdb99ec3fa50aebb6cc3668.jpg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      marginTop: 0,
      color: 'white'
    },
    title: {
      fontSize: 24,
      textAlign:'center'
    },  
}



  function BuySellHome() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}  style={{ padding: 5 }}>
        <Grid container spacing={1} >
          <Grid item xs = {12}>
          <Paper>
              <Card style={style.root} variant="outlined" >
                <div style={{ margin: 40 }}> 
                  {/* <Grid container spacing={12} >
                    <Grid item xs = {3} style = {{backgroundColor:"#ece58b"}}> */}
                      <Grid container spacing={1} style = {{margin:20}}>
                          <Grid item xs = {7}/>
                          <Grid item xs = {2}>
                              <Paper style={{ marginTop: 10 }}>
                                  <Card variant="outlined" style = {{backgroundColor:"#EECE5C"}}> 
                                  <Button size="large" style = {{backgroundColor:"#EECE5C"}} href = "/buy">Buy</Button>
                                  </Card>
                              </Paper>
                          </Grid>
                          <Grid item xs = {2}>
                              <Paper style={{ marginTop: 10 }}>
                                  <Card variant="outlined" style = {{backgroundColor:"#EECE5C"}}> 
                                  <Button size="large" style = {{backgroundColor:"#EECE5C"}} href = "/sell">Sell</Button>
                                  </Card>
                              </Paper>
                          </Grid>
                          <Grid item xs = {1}/>
                      </Grid>
                      <Grid container spacing={1} >
                      <Grid item xs = {12}>
                        {/* <TextField
                          className={classes.margin}
                          id="input-with-icon-textfield"
                          label="Search for Books"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton type="submit" aria-label="search">
                                  <SearchIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        /> */}
                      </Grid>
                      </Grid>
                    {/* </Grid>
                  </Grid> */}
                </div>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <BookListHome/>
        <br/>
        <BookSoulsDef/>
        <WhyShouldBookSouls/>
        </div>
    )
  }

export default BuySellHome 