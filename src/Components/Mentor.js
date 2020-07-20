import React, { Component } from 'react';
import { Card, TextField, withStyles, CardContent, Button } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
    card: {
        height: 700,
        width: '50%',
        marginTop: '5%',
        paddingTop: '2%',
        marginLeft: '25%',
        border: '1px solid black'
    },
    CardContent: {
        marginTop: '-3%',
        marginTop: '-10%'
    },
    TextField: {
        width: '70%',
        marginTop: '3%'
    },
    textField: {
        width: '50%',
        marginTop: '-14%'
    },
    Button: {
        marginTop: '6%',
        background: 'black',
        color: 'white',
        width: '10%',
        marginRight: '30%',
        marginLeft: '30%',
    },
    button: {
        marginLeft: '5%',
        marginTop: '1%',
        background: 'black',
        color: 'white',
        width: '10%',
        marginTop: '-25%'
    },
    EditIcon: {
        marginLeft: '95%',
        width: '5%',
        height: '40%',
        marginTop: '-15%'
    }

});

class Mentor extends Component {
    render() {
        const { classes, } = this.props;
        return (
            <Card className={classes.card}>
                <EditIcon className={classes.EditIcon}></EditIcon>
                <TextField className={classes.textField} label="Mentor Name" /><Button className={classes.button}>Search</Button>
                <CardContent className={classes.CardContent}>
                    <TextField className={classes.TextField} label="Mentor Name" />
                    <br />
                    <TextField className={classes.TextField} label="Mentee Name" />
                    <br />
                    <TextField className={classes.TextField} label="Mentoring Diversion" />
                    <br />
                    <TextField className={classes.TextField} label="Mentee Feedback" />
                    <br />
                    <TextField className={classes.TextField} label="Which thing she/he has to improve" />
                    <br />
                    <TextField className={classes.TextField} label="English Feedback" />
                    <Button className={classes.Button}>Submit</Button>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(Mentor);