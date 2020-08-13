import React from 'react';
import './App.scss';

import Graveyard from '../components/Graveyard/Graveyard';
import RecentlyDeparted from '../components/RecentlyDeparted/RecentlyDeparted';
import SharkTank from '../components/SharkTank/SharkTank';

import studentsData from '../helpers/data/studentsData';

// TODO: add Graveyard component

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyBeloved: [],
    recentlyDeparted: {},
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    this.setState({ livingStudents });

    const dearlyBeloved = studentsData.dearlyBeloved();
    this.setState({ dearlyBeloved });
  }

  sharkAttack = () => {
    const recentlyDeparted = studentsData.sharkAttack();

    if (recentlyDeparted) {
      this.setState({ recentlyDeparted });
    }

    const livingStudents = studentsData.livingStudents();
    this.setState({ livingStudents });

    const dearlyBeloved = studentsData.dearlyBeloved();
    this.setState({ dearlyBeloved });
  }

  render() {
    const { livingStudents } = this.state;
    const { dearlyBeloved } = this.state;
    const { recentlyDeparted } = this.state;

    return (
      <div className="App container">
        <h1>Shark Attack</h1>
        <SharkTank livingStudents={livingStudents} />
        <button className="btn btn-danger my-3" onClick={this.sharkAttack}>SHARK ATTACK!!</button>
        <RecentlyDeparted recentlyDeparted={recentlyDeparted} />
        <Graveyard dearlyBeloved={dearlyBeloved} />
      </div>
    );
  }
}

export default App;
