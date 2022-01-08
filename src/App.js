import { Component } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import ShopingContainer from './components/ShopingContainer';


class App extends Component {
  state = {
    search_text: 'Laptop',
    showCart: false,
    sortBy: '',
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
        pro_name: 'Laptop',
        imgURL: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/alienware_notebooks/m15_r6_non-touch_non-tobii/media-gallery/awm15_r6_15_cnb_00000ff090_gy.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402",
        price: `$2100`,
        desc: 'ALIENWARE M15 R6 GAMING LAPTOP',
      },
    ],
    cart_list: [
      {
        pro_id: 1,
        pro_name: 'Laptop',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/c/8/u/mkgp3hn-a-thin-and-light-laptop-apple-original-imag7yznc5d2rsuh.jpeg?q=70",
        price: `$1500`,
        desc: 'APPLE Macbook Pro M1 Pro Chip',
        qty: 2
      },
      {
        pro_id: 2,
        pro_name: 'Mobile',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
        price: `$850`,
        desc: 'APPLE iPhone 13 (Blue, 256 GB)',
        qty: 1
      },
    ]
  }

  handleShowCart = () => {

    this.setState({ showCart: !this.state.showCart })

  }

  handleSearchText = (e) => {
    this.setState({ search_text: e.target.value })
  }





  render() {
    const searchtext = this.state.product_list.desc

    return (
      <div className="App" >
        <Header
          showCart={this.state.showCart}
          handleShowCart={this.handleShowCart}

        />


        <ShopingContainer
          productList={this.state.product_list}
          searchText={this.state.search_text}
          handleSearchText={this.handleSearchText}
          sortBy={this.state.sortBy}


        />



        {this.state.showCart ?
          <Cart
            cartList={this.state.cart_list} /> : ''
        }


      </div>
    );
  }

}

export default App;
