import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './Join.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
export default function SignIn() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const classes = useStyles();

    return(
      <div className="joinOuterContainer">
        <form action="" className="form">
           <div className="joinInnerContainer">
               <h1 className="heading">Join</h1>
               <form className={classes.root} noValidate autoComplete="off">
               <TextField id="outlined-basic" label="User Name" variant="outlined" style={{backgroundColor: '#ffffff'}}  className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/>
               <TextField id="outlined-basic" label="Room Name" variant="outlined" style={{backgroundColor: '#ffffff'}}  className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)}/>
               </form>
               <Link onClick={e =>(!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
               <button className={'button mt-20'} type="submit"><span>LOG IN</span></button>   
               </Link>
        </div>
        </form>
    </div>
  );
  }
