import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';

export const CardContainer = ({housesInfo}) => {
  console.log('housesInfo', housesInfo);

  const houseCards = housesInfo.map(( house, index )=> {
    // console.log(house);
    return <Card 
      house={house}
      key={index}
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
