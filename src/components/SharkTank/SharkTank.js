import React from 'react';
// import PropTypes from 'prop-types';

import Student from '../Student/Student';

class SharkTank extends React.Component {

  render() {
    const { livingStudents } = this.props;

    const studentCards = livingStudents.map((student) => (
      <Student key={student.id} student={student} />
    ));

    return (
      <div>
        <h2>Shark Tank</h2>
        <div className="card-columns">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
