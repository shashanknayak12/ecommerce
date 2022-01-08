import { Component } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import ShopingContainer from './components/ShopingContainer';


class App extends Component {
  state = {
    search_text: '',
    showCart: false,
    sortby: '',
    product_list: [
      {
        pro_id: 1,
        pro_name: 'Laptop',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/c/8/u/mkgp3hn-a-thin-and-light-laptop-apple-original-imag7yznc5d2rsuh.jpeg?q=70",
        price: `$1500`,
        desc: 'APPLE Macbook Pro M1 Pro Chip',
      },
      {
        pro_id: 2,
        pro_name: 'Mobile',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
        price: `$850`,
        desc: 'APPLE iPhone 13 (Blue, 256 GB)',
      },
      {
        pro_id: 3,
        pro_name: 'Smart Watch',
        imgURL: "https://m.media-amazon.com/images/I/71GIYSZpW+L._SL1500_.jpg",
        price: `$600`,
        desc: 'Apple Watch Series 7 (GPS, 41mm) ',
      },
      {
        pro_id: 4,
        pro_name: 'Camera',
        imgURL: "https://m.media-amazon.com/images/I/914hFeTU2-L._SX679_.jpg",
        price: `$500`,
        desc: 'APPLE Macbook Pro M1 Pro Chip',
      },
      {
        pro_id: 5,
        pro_name: 'laptop',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/c/8/u/mkgp3hn-a-thin-and-light-laptop-apple-original-imag7yznc5d2rsuh.jpeg?q=70",
        price: `$1000`,
        desc: 'APPLE Macbook Pro M1 Pro Chip',
      },
    ],
    cart_list: [
      {
        pro_id: 1,
        pro_name: 'Laptop',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/c/8/u/mkgp3hn-a-thin-and-light-laptop-apple-original-imag7yznc5d2rsuh.jpeg?q=70",
        price: `$1500`,
        desc: 'APPLE Macbook Pro M1 Pro Chip',
      },
      {
        pro_id: 2,
        pro_name: 'Mobile',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
        price: `$850`,
        desc: 'APPLE iPhone 13 (Blue, 256 GB)',
      },
    ]
  }
  render() {
    return (
      <div className="App" >
        <Header
          showCart={this.state.showCart}

        />
        <Cart cartList={this.state.cart_list} />

        <ShopingContainer
          productList={this.state.product_list}
        />
        <ShopingContainer
          productList={this.state.product_list}
        />

      </div>
    );
  }

}

export default App;
