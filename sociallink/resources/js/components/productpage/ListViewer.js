import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import ProductListView from './ProductListView';
import axios from 'axios';


class ListViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            produk: [],
        }
    }

    componentDidMount = () => {
        this.getProdukList();
    }

    getProdukList = () =>{
        let self = this;
        axios.get('/get/produk/list').then(function(res){
            self.setState({
                produk: res.data
            });
        });
    }
    render() {
        return (
            <div className='Product-wrapper'>
                <div className='title-product-page'>
                    <label>Our Product</label>
                </div>
                <div className='wrap-chard-product'>
                    {this.state.produk.map(function(x,i){
                        return <ProductListView key={i} data={x}/>
                    })}
                </div>
            </div>
        );
    }
}

export default ListViewer;
if (document.getElementById('listviewer')) {
    ReactDOM.render(<ListViewer />, document.getElementById('listviewer'));
}
