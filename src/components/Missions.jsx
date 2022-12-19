import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../App.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="Missoes" data-testid="missions">
        <Title headline="Missões" />
        {missions.map(({ name, year, coun, dest }) => (
          <MissionCard
            key={ name }
            name={ name }
            year={ year }
            country={ coun }
            destination={ dest }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
