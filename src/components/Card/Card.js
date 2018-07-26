import React from 'react';
import PropTypes from 'prop-types';



export const Card = ({house}) => {
  
  return (
    <div className='Card'>
      <p>name:{house.name}</p>
      <p>founded:{house.founded}</p>
      <p>seats:{house.seats}</p>
      <p>titles:{house.titles}</p>
      <p>coatOfArms:{house.coatOfArms}</p>
      <p>ancestralWeapons:{house.ancestralWeapons}</p>
      <p>words:{house.words}</p>
    </div>
  );
};

Card.propTypes = {
  house: PropTypes.object
};