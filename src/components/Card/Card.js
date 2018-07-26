import React from 'react';
import PropTypes from 'prop-types';
import { requestSwornMemberInfo } from '../../apiCalls';



export const Card = ({house}) => {
  console.log(house);
  
  const swornMemberId = (swornMembers) =>{
    const seperateId = swornMembers.forEach( member => {
      member.split('/').slice(5);
      // const memberId = splitMemeber.slice(5);
      // console.log(splitMember)
    });
    console.log(seperateId);
    return seperateId;
  };
    // requestSwornMemberInfo(memberId);

  return (
    <div 
      className='Card'
      onClick={swornMemberId(house.swornMembers)}
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