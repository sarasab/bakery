import React from 'react';
import Onglet from './components/Onglet';
import Add from './components/add';
import List from './components/list';
import Pay from './components/pay';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'add',
      items = addItem [{name:xx , price:xx}],
    };
  }
  render() {
    return (
      <div className="App">
        <Onglet
          isSelected={this.state.activeTab === 'add'}
          onClick={() => this.setState({activeTab: 'add'})}
        >
          Add
        </Onglet>
        <Onglet
          isSelected={this.state.activeTab === 'list'}
          onClick={() => this.setState({activeTab: 'list'})}
        >
          List
        </Onglet>
        <Onglet
          isSelected={this.state.activeTab === 'pay'}
          onClick={() => this.setState({activeTab: 'pay'})}
        >
          Pay
        </Onglet>
        {this.state.activeTab === 'add' && <Add />}
        {this.state.activeTab === 'list' && <List />}
        {this.state.activeTab === 'pay' && <Pay />}
       
      </div>
    );
  }
}
export default App;
