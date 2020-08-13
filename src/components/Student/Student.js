import React from 'react';

import './Student.scss';

class Student extends React.Component {

  render() {
    const { student } = this.props;

    const isAliveTextColorClass = student.isAlive ? 'text-light' : 'text-danger';
    const isAliveClass = student.isAlive ? 'is-alive' : 'has-passed';

    return (
      <div>
        <div class={`${isAliveTextColorClass} ${isAliveClass}`}>
          {
            student.isAlive ? (
              <i className="fas fa-fish fa-2x"></i>
            ) : (
              <i class="fas fa-skull-crossbones fa-2x"></i>
            )
          }
          <span className="ml-1">{student.firstName}</span>
        </div>
      </div>
    );
  }
}

export default Student;
