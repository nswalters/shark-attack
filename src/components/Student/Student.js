import React from 'react';

class Student extends React.Component {

  render() {
    const { student } = this.props;

    return (
      <div className={`card ${student.isAlive ? "bg-success" : "bg-dark"} text-light border-0`}>
        <div className="card-body">
          <h5 className="card-title text-uppercase">{student.firstName} {student.lastName}</h5>
          {
            student.isAlive ? (
              <p className="card-text">This student is alive and well... so far.</p>
            ) : (
              <p className="card-text">A shark has gotten the better of this student.</p>
            )
          }
        </div>
      </div>
    );
  }
}

export default Student;
