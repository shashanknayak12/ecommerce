import { Component } from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import ShopingContainer from './components/ShopingContainer';


class App extends Component {
  state = {
    search_text: '',
    showCart: false,
    sortBy: '',
    product_list: [
      {
        pro_id: 1,
        pro_name: 'Mobile',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
        price: `85000`,
        desc: ' iPhone 13 (Blue, 256 GB)',
      },
      {
        pro_id: 2,
        pro_name: 'Laptop',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/c/8/u/mkgp3hn-a-thin-and-light-laptop-apple-original-imag7yznc5d2rsuh.jpeg?q=70",
        price: `119000`,
        desc: 'APPLE Macbook Pro M1 Pro Chip',
      },
      {
        pro_id: 3,
        pro_name: 'Smart Watch',
        imgURL: "https://m.media-amazon.com/images/I/71GIYSZpW+L._SL1500_.jpg",
        price: `41000`,
        desc: 'Apple Watch Series 7 (GPS, 41mm) ',
      },
      {
        pro_id: 4,
        pro_name: 'Camera',
        imgURL: "https://m.media-amazon.com/images/I/914hFeTU2-L._SX679_.jpg",
        price: `31000`,
        desc: ' Canon EOS 3000D DSLR Camera ',
      },
      {
        pro_id: 5,
        pro_name: 'Laptop',
        imgURL: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/alienware_notebooks/m15_r6_non-touch_non-tobii/media-gallery/awm15_r6_15_cnb_00000ff090_gy.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402",
        price: `194000`,
        desc: 'ALIENWARE M15 R6 GAMING LAPTOP',
      },
      {
        pro_id: 6,
        pro_name: 'Shoes',
        imgURL: "https://rukminim1.flixcart.com/image/880/1056/kx50gi80/shoe/u/g/8/9-232224-10-skechers-gry-original-imag9nuphfhzzcan.jpeg?q=50",
        price: `3000`,
        desc: ' Skechers Flex Walking Shoes F',
      },
      {
        pro_id: 7,
        pro_name: 'Gym',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/ktbu6q80/home-gym-combo/h/t/1/professional-metal-integrated-rubber-plates-set-with-one-3-ft-original-imag6zy67hcwa2za.jpeg?q=70",
        price: `10950`,
        desc: 'HRX 50 kg Professional  Rubber Plates Kit',
      },
    ],
    cart_list: [
      {
        pro_id: 7,
        pro_name: 'Gym',
        imgURL: "https://rukminim1.flixcart.com/image/416/416/ktbu6q80/home-gym-combo/h/t/1/professional-metal-integrated-rubber-plates-set-with-one-3-ft-original-imag6zy67hcwa2za.jpeg?q=70",
        price: `10950`,
        desc: 'HRX 50 kg Professional  Rubber Plates Kit',
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


  handleSort = (e) => {

    this.setState({ sortBy: e.target.value })


  }


  handleDelete = (item) => {
    const newCartList = this.state.cart_list.filter((eachItem, i) => {
      return i !== item
    })
    this.setState({ cart_list: newCartList })
  }


  handleAddCart = (pro_id) => {
    const newProductList = [...this.state.product_list]
    const newCartList = [...this.state.cart_list]

    const found = newCartList.find(eachPro => {
      return eachPro.pro_id === pro_id
    })

    if (found) return


    const res = newProductList.find(eachPro => {
      return eachPro.pro_id === pro_id
    })


    newCartList.push({ ...res, qty: 1 })

    this.setState({ cart_list: newCartList })


  }

  handleQty = (e) => {
    console.log(e.target.value)
    this.setState({ qty: e.target.value })
  }

  render() {
    let searchRes = this.state.product_list.filter(eachItem => {
      const searchText = eachItem.desc.toLowerCase()
      return searchText.includes(this.state.search_text.toLowerCase())

    })

    if (this.state.sortBy) {
      searchRes = searchRes.sort((a, b) => {
        return this.state.sortBy === 'price-low-high' ? a.price - b.price : b.price - a.price
      })
    }



    return (
      <div className="App" >
        <Header
          showCart={this.state.showCart}
          handleShowCart={this.handleShowCart}

        />


        <ShopingContainer
          productList={searchRes}
          searchText={this.state.search_text}
          handleSearchText={this.handleSearchText}
          sortBy={this.state.sortBy}
          handleSort={this.handleSort}
          handleAddCart={this.handleAddCart}



        />




        {this.state.showCart ?
          <Cart
            cartList={this.state.cart_list}
            handleDelete={this.handleDelete}
            handleQty={this.handleQty} /> : ''
        }


      </div>
    );
  }

}

export default App;
