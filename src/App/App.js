import React from 'react';
import './App.scss';

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

    return (
      <div className="App">
        <h1>Shark Attack</h1>
        <SharkTank livingStudents={livingStudents} />
      </div>
    );
  }
}

export default App;
