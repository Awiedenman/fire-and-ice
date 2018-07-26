import React from 'react';
import PropTypes from 'prop-types';
// import fetchSwornMemberData}



export const Card = ({house, fetchSwornMemberData}) => {
  
  const swornMemberId = () =>{
    // console.log('click');
    const membersIds = house.swornMembers.map( member => {
      const seperateId = member.split('/').slice(5);
      fetchSwornMemberData(seperateId[0]);
      return seperateId[0];
    });
    // console.log(membersIds);
    return membersIds;
  };
  // console.log(swornMemberId);

  return (
    <div 
      className='Card'
      onClick={swornMemberId}
    >
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