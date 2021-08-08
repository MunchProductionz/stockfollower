import React from 'react';
import axios from 'axios';


import './App.css';

class App extends React.Component {


  state = {
    ticker: '',
    price: '',
    stocks: []
  };

  componentDidMount = () => {
    this.getStock();
  };

  getStock = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ stocks: data });         // Wat
        console.log('Stock has been received!');
      })
      .catch(() => {
        alert('Error retrieving stock data.')   // Need exception-handling
      });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  submitStock = (event) => {
    event.preventDefault();

    const payload = {
      ticker: this.state.ticker,
      price: this.state.price
    }

    axios({
      url: 'api/save',
      method: 'POST',
      data: payload
    })
      .then(() => {
        console.log('Stock has been sent to the server');
        this.resetUserStockInputs();
        this.getStock();
      })
      .catch(() => {
        console.log('Stock: Internal server error');
      });
  };

  resetUserStockInputs = () => {
    this.setState({
      ticker: '',
      price: ''
    });
  };

  display = (posts, stock) => {
    this.displayStock(this.stock);
  }

  displayStock = (stocks) => {
    
    if (!stocks.length) return null;

    return stocks.map((stock, index) => (
      <div key={index} className="stock_display">
        <h3>{stock.ticker}</h3>
        <p>{stock.price}</p>
      </div>
    ));
  };


  render() {

    console.log('State: ', this.state);

    // JSX
    return(
      <div className="app">
        <h2>Welcome to my App</h2>
        <form onSubmit={this.submitStock}>
          <div className="form-input">
            <input
              type="text"
              name="ticker"
              placeholder="Ticker"
              value={this.state.ticker}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <textarea 
              name="price"
              placeholder="Price"  
              id="" 
              cols="1" 
              rows="1" 
              value={this.state.price}
              onChange={this.handleChange}
            >
            </textarea>
          </div>

          <button>Add Stock</button>
        </form>

        <div className="stock_display">
          {this.displayStock(this.state.stocks)}
        </div>
      </div>
    );
  }
}


export default App;