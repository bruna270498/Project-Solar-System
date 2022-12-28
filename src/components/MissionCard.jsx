import React from 'react';
import PropTypes from 'prop-types';
import { AiTwotoneCalendar, AiFillEnvironment, AiFillFlag } from 'react-icons/ai';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="MissaoCard" data-testid="mission-card">
        <div className="nameCard">
          <p className="Texto1" data-testid="mission-name">{name}</p>
        </div>
        <div className="infoCard">
          <i><AiTwotoneCalendar /></i>
          <p data-testid="mission-year">{year}</p>
          <i className="Texto2"><AiFillEnvironment /></i>
          <p data-testid="mission-country">{country}</p>
          <i className="Texto3"><AiFillFlag /></i>
          <p className="Texto" data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
