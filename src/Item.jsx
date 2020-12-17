import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-onsenui';
export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date.getFullYear()+"/"+this.props.date.getMonth()+"/"+this.props.date.getDate()+" "+this.props.date.getHours()+":"+this.props.date.getMinutes()+":"+
      this.props.date.getSeconds()
    };
  }
  render() {
    return (
      <Card>
        <p>{this.props.text}</p>
        <p>{this.state.date}</p>
      </Card>
    );
  }
}