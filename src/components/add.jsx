import React from 'react';
class add extends React.Component {
  constructor() {
    super();
    this.state = {
      productName: '',
      price: 1,
    };
  }
  updateProductName = (event) => {
    this.setState({productName: event.target.value});
  };

  updatePrice = (event) => {
    this.setState({price: event.target.value});
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.updateProductName}
         
          className="form-control"
        />
         
        <input
          type="range"
          onChange={this.updatePrice}
          
          className="form-range"
        />
        <button className="btn btn-primary"  onClick={()=>this.props.addItem(this.state.productName,this.state.price)} >Add </button>
       
      </div>
    );
  }
}
export default add;
