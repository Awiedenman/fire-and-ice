import React from 'react';
import { connect } from 'react-redux';
import { Card } from '../../components/Card/Card';

export const CardContainer = (props) => {
  console.log(props);
  return (
    <div> 
      <Card/>

    </div>
  );
};

export const mapStateToProps = state => ({
  housesInfo: state.housesInfo
});

export default connect(mapStateToProps)(CardContainer);
