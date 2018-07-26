import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHousesToStore } from '../../actions';
// import { fakeAction } from '../../actions';
import { houseDataRequest } from '../../apiCalls';


class App extends Component {

  async componentDidMount(){
    const url = 'http://localhost:3001/api/v1/houses';
    const housesInfo = await houseDataRequest(url);
    this.props.addHousesToStore(housesInfo);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: PropTypes.shape({ fake: string }),
  addHousesToStore: PropTypes.func
};

const mapStateToProps = ({ fake }) => ({ fake });
const mapDispatchToProps = dispatch => ({ 
  addHousesToStore:(housesInfo) => dispatch(addHousesToStore(housesInfo))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
