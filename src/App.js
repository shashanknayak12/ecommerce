import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ShopingContainer from './components/ShopingContainer';


class App extends Component {
  state = {
    search_text: '',
    show_cart: false,
    sortby: '',
    product_list: [
      {
        pro_id: 1,
        pro_name: 'laptop',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/c/8/u/mkgp3hn-a-thin-and-light-laptop-apple-original-imag7yznc5d2rsuh.jpeg?q=70",
        price: `$1000`,
        desc: 'APPLE Macbook Pro M1 Pro Chip',
      }
    ],

    cart_list: [
      {

        pro_id: 1,
        pro_name: 'laptop',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/c/8/u/mkgp3hn-a-thin-and-light-laptop-apple-original-imag7yznc5d2rsuh.jpeg?q=70",
        price: `$1000`,
        desc: 'APPLE Macbook Pro M1 Pro Chip',
        qty: 1

      }
    ]
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <ShopingContainer
          productList={this.state.product_list}
        />
      </div>
    );
  }

}

export default App;
