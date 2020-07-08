import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, TextField, withStyles , CardContent , Box} from "@material-ui/core";

const styles = theme => ({
    card: {
        height: 700,
        width: '50%',
        marginTop: '7%',
        marginLeft: '25%',
        border: '1px solid black'
    },
    CardContent: {
        marginTop: '5%',
        marginLeft: '10%',
    }
    
});

class CardComponent extends Component {
    render() {
        const { classes, } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent className={classes.CardContent}>
                    <Box></Box>
                <TextField label="Mentee Name"  />
                <br/>
                <br/>
                <TextField label="Mentee Name"  />
                <br/>
                <br/>
                <TextField label="Mentee Name"  />
                <br/>
                <br/>
                <TextField label="Mentee Name"  />
                <br/>
                <br/>
                <TextField label="Mentee Name"  />
                <br/>
                <br/>
                <TextField label="Mentee Name"  />
                <br/>
                <br/>
                <TextField label="Mentee Name"  />
                <br/>
                <br/>
                <TextField label="Mentee Name"  />
                <br/>
                <br/>
                <TextField label="Mentee Name"  />
                </CardContent>
            </Card>
        );
    }
}

CardComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardComponent);