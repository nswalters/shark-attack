import React from 'react';

class RecentlyDeparted extends React.Component {
  render() {
    const { recentlyDeparted } = this.props;

    return (
      <div>
        <h6>Recently Departed: {recentlyDeparted.firstName}</h6>
      </div>
    );
  }
}

export default RecentlyDeparted;
