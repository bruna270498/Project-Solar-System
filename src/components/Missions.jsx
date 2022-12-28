import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../App.css';

class Missions extends React.Component {
  render() {
    return (
      <div className="Missoes" data-testid="missions">
        {/* <Title headline="Missões" /> */}
        <h2 className="missoesTitulo">Missões</h2>
        {missions.map(({ name, year, country, destination }) => (
          <MissionCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
