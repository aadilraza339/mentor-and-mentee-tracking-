import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, TextField, withStyles, CardContent } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
    card: {
        height: 900,
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
    },
    Button: {
        marginTop: '6%',
        background: 'black',
        color: 'white',
        width: '10%',
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
    render() {
        const { classes, } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent className={classes.CardContent}>
                    <EditIcon className={classes.EditIcon}></EditIcon>

                    <TextField className={classes.TextField} label="Mentee Name" />
                    <br />
                    <br />
                    <TextField className={classes.TextField} label="Mentor Name" />
                    <br />
                    <br />
                    <TextField className={classes.TextField} label="How much month spend here" />
                    <br />
                    <br />
                    <TextField className={classes.TextField} label="Where is in study" />
                    <br />
                    <br />
                    <TextField className={classes.TextField} label="How was study is going" />
                    <br />
                    <br />
                    <TextField className={classes.TextField} label="English Mentor" />
                    <br />
                    <br />
                    <TextField className={classes.TextField} label="From Where" />
                    <br />
                    <br />
                    <TextField className={classes.TextField} label="How much she done" />
                    <br />
                    <br />
                    <TextField className={classes.TextField} label="Mentor Problem" />
                    <br />
                    <br />
                    <TextField className={classes.TextField} label="Study Schedule" />
                    <br />
                    <br />
                    <TextField className={classes.TextField} label="How many hours doing study" />
                    <Button className={classes.Button}>Submit</Button>
                </CardContent>
            </Card>
        );
    }
}

CardComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardComponent);