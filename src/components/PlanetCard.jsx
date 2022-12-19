import React from 'react';
import PropType from 'prop-types';
import '../App.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;
    return (
      <div className="divPlaneta" data-testid="planet-card">
        <img className={ planetName } src={ planetImage } alt={`Planeta ${planetName}`} />
        <p className="nomes" data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string.isRequired,
  planetImage: PropType.string.isRequired,
};

export default PlanetCard;
