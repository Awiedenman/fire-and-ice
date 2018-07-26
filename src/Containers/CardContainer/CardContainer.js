import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';

export const CardContainer = ({housesInfo, fetchSwornMemberData}) => {
  // console.log('housesInfo', housesInfo);

  const houseCards = housesInfo.map(( house, index )=> {
    // console.log(house);
    return <Card 
      house={house}
      key={index}
      fetchSwornMemberData={fetchSwornMemberData}
    />;
  });
  
  
  return (
    <div className='Container'>
      {houseCards} 
    </div>
  );
};

export const mapStateToProps = state => ({
  housesInfo: state.housesInfo
});

export default connect(mapStateToProps)(CardContainer);
