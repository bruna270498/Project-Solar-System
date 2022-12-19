import React from 'react';
import PropType from 'prop-types';
import '../App.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (<h2 className="planeta">{headline}</h2>);
  }
}

Title.propTypes = {
  headline: PropType.string.isRequired,
};

export default Title;
