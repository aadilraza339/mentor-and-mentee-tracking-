import React, { Component } from 'react';
import { AppBar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    AppBar: {
        height: '8%',
    },
    Logout: {
        marginTop: '1%',
        width: '5%',
        height: '40px',
        marginLeft: '90%',
        background: 'white'
    },
    Mentor: {
        width: '8%',
        height: '50px',
        background: 'Blue',
        marginTop: '10%',
        color: 'white',
        fontSize: '20px',
        marginRight: '20%'
    },
    Mentee: {
        width: '8%',
        height: '50px',
        background: 'Blue',
        marginTop: '10%',
        color: 'white',
        fontSize: '20px',
    }
})

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar className={classes.AppBar}>
                    <Button className={classes.Logout}>Logout</Button>
                </AppBar>
                <Button className={classes.Mentor}>Mentor </Button>
                <Button className={classes.Mentee}>Mentee </Button>
            </div>
        )
    }
}

export default withStyles(styles)(Homepage);    