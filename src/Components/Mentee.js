import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, TextField, withStyles, CardContent } from "@material-ui/core";

const styles = theme => ({
    card: {
        height: 800,
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
});

class CardComponent extends Component {
    render() {
        const { classes, } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent className={classes.CardContent}>
                <button className={classes.button} onClick={() => { this.setState({ editing: true }); }}> Edit </button>
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
                </CardContent>
            </Card>
        );
    }
}

CardComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardComponent);