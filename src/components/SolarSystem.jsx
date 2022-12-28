import React from 'react';
// import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        {/* <Title headline="Planetas" /> */}
        <div className="divv" />
        <h2 className="planeta">Planetas</h2>
        <div className="divPla" data-testid="solar-system">
          {planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />
          ))}
        </div>
      </>
    );
  }
}
export default SolarSystem;
