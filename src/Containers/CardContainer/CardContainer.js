import React from 'react';
import { connect } from 'react-redux';

export const CardContainer = (props) => {
  console.log(props);
  return (
    <div>

    </div>
  );
};

export const mapStateToProps = state => ({
  housesInfo: state.housesInfo
});

export default connect(mapStateToProps)(CardContainer);
