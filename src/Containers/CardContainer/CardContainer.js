import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';

export const CardContainer = ({housesInfo, fetchSwornMemberData, swornMembers, addSwornMembersToStore}) => {
  // console.log('swornMembers', swornMembers);

  const houseCards = housesInfo.map((house, index) => {
    // console.log(house);
    return <Card 
      house={house}
      key={index}
      fetchSwornMemberData={fetchSwornMemberData}
      addSwornMembersToStore={addSwornMembersToStore}
    />;
  });
  
  
  return (
    <div className='Container'>
      {houseCards} 
    </div>
  );
};

export const mapStateToProps = state => ({
  housesInfo: state.housesInfo,
  swornMembers: state.swornMembers
});

export default connect(mapStateToProps)(CardContainer);
