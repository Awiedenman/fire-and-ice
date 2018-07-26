import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHousesToStore } from '../../actions';
// import { fakeAction } from '../../actions';
import { houseDataRequest,requestSwornMemberInfo } from '../../apiCalls';
import CardContainer from '../../Containers/CardContainer/CardContainer';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  fetchSwornMemberData =  (membersIds) => {
    console.log('click');
    
    console.log(membersIds);
    // try {
    //   const swornMemberInfo = await requestSwornMemberInfo(memberId);
    //   this.props.addSwornMembersToStore(swornMemberInfo)
    // } catch (error){
    //   throw Error(`Could not fetch ${error.message}`)
    // }

  }

  async componentDidMount(){
    const url = 'http://localhost:3001/api/v1/houses';
    try {
      await this.setState({isLoading: true});
      // console.log('on', this.state.isLoading);
      const housesInfo = await houseDataRequest(url);
      await this.setState({isLoading: false});  
      // console.log('off', this.state.isLoading);
      this.props.addHousesToStore(housesInfo);
    } catch (error) {
      throw Error(`Could not fetch: ${error.message}`);
    }
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
          {this.state.isLoading ?
            <img id='wolf' src={ require('../../images/wolf.gif')}/> :
            <CardContainer
              fetchSwornMemberData={this.fetchSwornMemberData}/>
          }
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
export const mapDispatchToProps = dispatch => ({ 
  addHousesToStore:(housesInfo) => dispatch(addHousesToStore(housesInfo))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
