
import axios from 'axios';
import React, { Component } from 'react'
import ProductModal from './ProductModal';

class ProductListView extends Component {
  constructor(props) {
    super(props);

    this.state = {
        productname : null,
        productketerangan : null,
        productharga: null,
    }
  }
  getProdukDetails = (id) => {
    axios.post('/get/produk/detail', {
      produkid: id
    }).then((response) => {
      this.setState({
          productname: response.data.nama,
          productketerangan: response.data.keterangan,
          productharga : response.data.harga,
      })
      console.log(response.data);
  })
  }
  render (){
    return(
      <div className='card-product' data-bs-toggle="modal"
      data-bs-target={'#viewModal'+this.props.data.id}
      onClick={ () => this.getProdukDetails(this.props.data.id)}>
          <div className='card-name'>
              <label>{this.props.data.nama}</label>
              <p>Network Automation Tools</p>
          </div>
          <img src="/images/wifi.png"/>
          <div className='price-button'>
          <label>$ {this.props.data.harga}</label>
            <ProductModal modalId={this.props.data.id} productData={this.state}/>
          </div>
      </div>
    )
  }
}

export default ProductListView
