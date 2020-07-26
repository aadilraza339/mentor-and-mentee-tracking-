import React, { Component } from 'react';
import { Card, TextField, withStyles, CardContent, Button, Link } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

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
        marginTop: '-10%',
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
        marginTop: '-25%',
        background: 'black',
        color: 'white',
        width: '10%',
    },
    button1: {
        marginTop: '6%',
        background: 'black',
        color: 'white',
        width: '10%',
        marginRight: '30%',
        marginLeft: '30%'
    },
    EditIcon: {
        marginLeft: '95%',
        width: '5%',
        height: '40%',
        marginTop: '-15%'
    }
});

class Mentor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mentor_name: "",
            mentee_name: "",
            mentoring_duration: "",
            improve_upon: "",
            english_feedback: '',
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value)
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.mentee_name)
        const newUser = {
            mentor_name: this.state.mentor_name,
            mentee_name: this.state.mentee_name,
            mentoring_duration: this.state.mentoring_duration,
            improve_upon: this.state.improve_upon,
            english_feedback: this.state.english_feedback,
        };

        axios.post(
            "http://localhost:8000/mentor_mentee/mentor_info", newUser)
            .then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {
        const { classes, } = this.props;

        return (
            <Card className={classes.card} onSubmit={this.handleSubmit}>
                <EditIcon className={classes.EditIcon}></EditIcon>
                <TextField className={classes.textField} label="Mentor Name" /><Button className={classes.button}>Search</Button>
                <CardContent className={classes.CardContent}>
                    <TextField className={classes.TextField} name='mentor_name' onChange={this.handleChange} label="Mentor_Name" />
                    <br />
                    <TextField className={classes.TextField} name='mentee_name' onChange={this.handleChange} label="Mentee_Name" />
                    <br />
                    <TextField className={classes.TextField} name='mentoring_duration' onChange={this.handleChange} label="Mentoring_Diversion" />
                    <br />
                    <TextField className={classes.TextField} name='improve_upon' onChange={this.handleChange} label="Which_thing_she/he_has_to_improve" />
                    <br />
                    <TextField className={classes.TextField} name='english_feedback' onChange={this.handleChange} label="English_Feedback" />
                    <Button className={classes.Button} onClick={this.handleSubmit}>Submit</Button>
                </CardContent>
                <Link to="/Homepage">
                    <Button className={classes.button1}>Go Back</Button>
                </Link>
            </Card>
        )
    }
}

export default withStyles(styles)(Mentor);