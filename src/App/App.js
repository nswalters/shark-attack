import React from 'react';
import './App.scss';

import Graveyard from '../components/Graveyard/Graveyard';
import SharkTank from '../components/SharkTank/SharkTank';

import studentsData from '../helpers/data/studentsData';

// TODO: add Graveyard component

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyBeloved: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    this.setState({ livingStudents });

    const dearlyBeloved = studentsData.dearlyBeloved();
    this.setState({ dearlyBeloved });
  }

  render() {
    const { livingStudents } = this.state;
    const { dearlyBeloved } = this.state;

    return (
      <div className="App">
        <h1>Shark Attack</h1>
        <SharkTank livingStudents={livingStudents} />
        <button className="btn btn-danger my-3">SHARK ATTACK!!</button>
        <Graveyard dearlyBeloved={dearlyBeloved} />
      </div>
    );
  }
}

export default App;
