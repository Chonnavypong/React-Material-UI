import React, { useState } from 'react'
import {
    Typography, 
    TextField, 
    Paper, 
    Button,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core/'

import PropTypes from 'prop-types'

const Excercies1 = ({ name }) => {

    const [exercises, setExercises] = useState([])
    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value)
        
    }

    const handleCreate = (e) => {
        e.preventDefault();
        console.log('title ' + title)
        setExercises([ ...exercises, title])
        console.log(exercises)
        if ( title ) {
            setExercises([ 
                ...exercises, 
                    { 
                      title, 
                      id: new Date()
                    },
                ])
            setTitle('')
            }
        }
    
    return (
        <>
            <Typography 
                variant='h1' 
                align='center' 
                color="secondary" 
                gutterBottom
                >        
                {name}      
            </Typography>
            <Paper>
                <form onSubmit={handleCreate}>        
                    <TextField          
                        name='title'          
                        label='Exercise'          
                        value={title}          
                        onChange={handleChange}          
                        margin='normal'        
                    /> 
                    <Button        
                        type='submit'          
                        color='primary'          
                        // variant='raised'        
                        >          
                    Create        
                    </Button>      
                </form>
            </Paper>
            <p> {title} </p>
            <List>
                {exercises.map( ({ id, title }) => 
                    <ListItem key={id}>
                        <ListItemText primary={title}/>
                    </ListItem>
                )}
            </List>
        </>
    )
}

Excercies1.propTypes = {
    title: PropTypes.string
}

export default Excercies1