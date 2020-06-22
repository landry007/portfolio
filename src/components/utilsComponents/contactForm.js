import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

import firebase from '../config/fireBaseConfig'
import 'firebase/storage';


const db = firebase.firestore()



const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: '#fff'
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
}));

export default function ContactForm(props) {
    const classes = useStyles();
    const [isvalid, setIsvalid] = React.useState(false)
    const [values, setValues] = React.useState({
       email :'',
       object : '',
       message :''
    });

    const handleChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
        
    };

     function handleSubmit(e){
         e.preventDefault()
        if(values.email.match(/^[a-zA-z0-9]+@[a-z]+\.[a-z]+$/)){
            if(values.message.length > 0 && values.message.trim() !=='' && values.object.length > 0 && values.object.trim() !==''){
                db.collection('contacts').add({
                    email : values.email,
                    object : values.object,
                    message : values.message,
                    creadetAdd : new Date()
                }).then( msg =>{
                    setValues({email:'',object:'',message:''})
                    console.log(props);
                    
                    
                })
                
            }else{
                console.log('noooooooo mmmmmmmmaaaaaaccccccccchhhhhhhtttttttttt');
                
            }
        }
        
    }

    return (
        <form className={classes.container} method="post" autoComplete="off" onSubmit = { (e)=> handleSubmit(e) } >

            <TextField
                onChange={handleChange}
                required
                defaultValue = { values.email }
                id="outlined-email-input"
                label="Votre adresse email"
                className={classes.textField}
                type="email"
                name="email"
                fullWidth
                autoComplete="email"
                color ='#fff'
                margin="normal"
                variant="outlined"
            />
            <TextField
                onChange={handleChange}
                required
                id="outlined-password-input"
                label="Objet de votre mail"
                className={classes.textField}
                type="text"
                fullWidth
                name='object'
                margin="normal"
                variant="outlined"
            />

            <TextField

                onChange={handleChange}
                required
                id="outlined-multiline-static"
                label="Votre message"
                multiline
                rows="5"
                fullWidth
                name="message"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />

            <Button
                variant="contained"
                color="primary"
                style={{ display: 'flex', flex: '1', justifyContent: 'space-between' }}
                fullWidth
                // disabled={!isvalid}
                type="submit"
            >
                <Icon className={classes.rightIcon}></Icon>

                Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                <Icon className={classes.rightIcon}>send</Icon>
            </Button>


        </form>
    );
}