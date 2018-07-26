import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { mapStateToProps } from '../../Containers/CardContainer/CardContainer';
// import fetchSwornMemberData}



export const Card = ({house, fetchSwornMemberData, addSwornMembersToStore}) => {  
  
  const swornMemberIds = async () =>{
    const membersIds = house.swornMembers.map( member => {
      const seperateId = member.split('/').slice(5);
      return seperateId[0];
    });

    const unresolvedMembers = membersIds.map(async id => {
      const member = await fetchSwornMemberData(id);
      return member
    });

    const members = await Promise.all(unresolvedMembers);
    addSwornMembersToStore(members);
    // debugger
  };
 
  return (
    <div 
      className='Card'
      onClick={swornMemberIds}
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

// export const mapStateToProps = state => ({
//   swornMembers: state.swornMembers
// });

// export default connect(mapStateToProps)(Card);