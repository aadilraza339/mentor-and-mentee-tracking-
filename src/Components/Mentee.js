import React, { Component } from "react";
import { Card, TextField, withStyles, CardContent, Link } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

const styles = theme => ({
    card: {
        height: 1000,
        width: '50%',
        marginTop: '4%',
        marginLeft: '25%',
        border: '1px solid black'
    },
    CardContent: {
        marginTop: '5%',
    },
    TextField: {
        width: '100%',
        marginTop: '3%'
    },
    Button: {
        marginTop: '6%',
        background: 'black',
        color: 'white',
        width: '10%',
        marginRight: '30%',
        marginLeft: '30%'
    },
    button: {
        marginTop: '6%',
        background: 'black',
        color: 'white',
        width: '30%',
        marginRight: '30%',
        marginLeft: '30%'
    },
    EditIcon: {
        marginLeft: '95%',
        marginTop: '-3%',
        width: '5%',
        height: '40%'
    }
});

class CardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mentor: '',
            mentee: '',
            monthsInNg: '',
            english_mentor: '',
            from_place: '',
            completed_till_which_course: '',
            mentor_feedback: '',
            study_schedule: '',
            study_hours_daily: '',
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
            mentor: this.state.mentor,
            mentee: this.state.mentee,
            monthsInNg: this.state.monthsInNg,
            english_mentor: this.state.english_mentor,
            from_place: this.state.from_place,
            completed_till_which_course: this.state.completed_till_which_course,
            mentor_feedback: this.state.mentor_feedback,
            study_schedule: this.state.study_schedule,
            study_hours_daily: this.state.study_hours_daily,
        };

        axios.post(
            "http://localhost:8000/mentor_mentee/mentee_info", newUser)
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
                <CardContent className={classes.CardContent}>
                    <EditIcon className={classes.EditIcon}></EditIcon>
                    <TextField className={classes.TextField} name='mentor' onChange={this.handleChange} label="Mentor Name" />
                    <br />
                    <TextField className={classes.TextField} name='mentee' onChange={this.handleChange} label="Mentee Name" />
                    <br />
                    <TextField className={classes.TextField} name='monthsInNg' onChange={this.handleChange} label="Months IN Ng" />
                    <br />
                    <TextField className={classes.TextField} name='english_mentor' onChange={this.handleChange} label="English Mentor" />
                    <br />
                    <TextField className={classes.TextField} name='from_place' onChange={this.handleChange} label="From Where" />
                    <br />
                    <TextField className={classes.TextField} name='completed_till_which_course' onChange={this.handleChange} label="How much completed" />
                    <br />
                    <TextField className={classes.TextField} name='mentor_feedback' onChange={this.handleChange} label="Mentee Feedback" />
                    <br />
                    <TextField className={classes.TextField} name='study_schedule' onChange={this.handleChange} label="Study Schedule" />
                    <br />
                    <TextField className={classes.TextField} name='study_hours_daily' onChange={this.handleChange} label="Study Hour" />
                    <Button className={classes.Button} onClick={this.handleSubmit}>Submit</Button>

                    <Link to="/Homepage">
                        <Button className={classes.button}>Go Back</Button>
                    </Link>
                </CardContent>
            </Card>
        );
    }
}

export default withStyles(styles)(CardComponent);