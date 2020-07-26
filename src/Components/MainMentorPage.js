import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import axios from 'axios';

const styles = ((theme) => ({
  Card: {
    width: '30%',
    height: 50,
    marginTop: '2%',
    marginLeft: '35%',
    border: '1px solid black',
    fontSize: '30px',
    textAlign: 'center',
    marginBottom: '3%'
  },
}));

class MainMentorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentor_name: '',
      array: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/mentor_mentee/mentors")
      .then(response => {
        this.setState({ array: response.data, })
      });
  }

  render() {
    const { classes, } = this.props;
    const { array } = this.state;
    return (
      <div >
        {array.map((array, index) => (
          <div key={index} >
            <Card className={classes.Card}>  {array.mentor_name} </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(MainMentorPage);