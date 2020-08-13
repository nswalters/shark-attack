import React from 'react';

import './Student.scss';

class Student extends React.Component {

  render() {
    const { student } = this.props;

    const isAliveBackgroundClass = student.isAlive ? 'bg-success' : 'bg-dark';
    const isAliveTextColorClass = student.isAlive ? 'text-light' : 'text-danger';
    const isAliveClass = student.isAlive ? 'is-alive' : 'has-passed';

    return (
      <div>
        <div class={`${isAliveTextColorClass} ${isAliveClass}`}>
          <i className="fas fa-fish fa-2x"></i>
          <span>{student.firstName}</span>
        </div>
      </div>
      // <div className={`card ${isAliveBackgroundClass} ${isAliveTextColorClass} ${isAliveClass} border-0`}>
      //   <div className="card-body">
      //     <h5 className="card-title text-uppercase"><i className="fas fa-fish fa-2x"></i>{student.firstName} {student.lastName}</h5>
      //     {
      //       student.isAlive ? (
      //         <p className="card-text">Alive... for now.</p>
      //       ) : (
      //         <p className="card-text">Shark food.</p>
      //       )
      //     }
      //   </div>
      // </div>
    );
  }
}

export default Student;
