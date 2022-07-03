import axios from 'axios';
import React, { Component } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class  AddProduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productnama: null,
            productketerangan: null,
            productharga: null,
        }
    }
    inputProductNama= (event) => {
        this.setState({
            productnama: event.target.value,
        });
    }
    inputProductKeterangan = (event) => {
        this.setState({
            productketerangan: event.target.value,
        });
    }
    inputProductHarga = (event) => {
        this.setState({
            productharga: event.target.value,
        });
    }
    tambahProduct = () =>{
        axios.post('/post/produk/data', {
            produknama: this.state.productnama,
            produkketerangan: this.state.productketerangan,
            produkharga: this.state.productharga,
        }).then(() => {
            toast.success("Employee Saved Successfully");

            setTimeout(() => {
                location.reload();
            },2500)
        })
    }
    render() { 
        return ( 
            <>
                <div className='row text-right mb-3 pb-3'>
                    <button type='button' 
                        className='btn btn-info text-right col-3 offset-md-9'
                        data-bs-toggle="modal"
                        data-bs-target="#modalCreate"
                        >Add Produk
                    </button>
                </div>
                <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Product Detail</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='form'>
                                <div className="form-group">
                                    <input type="text"
                                        id="produknama"
                                        className='form-control mb-3'
                                        placeholder="Nama Produk"
                                        onChange={this.inputProductNama}
                                    />
                                </div>  
                                <div className="form-group">
                                    <textarea className="form-control mb-3" 
                                    id="keteranganproduk" rows="3"
                                    placeholder="Keterangan Produk"
                                    onChange={this.inputProductKeterangan}
                                    />
                                </div>  
                                <div className="form-group">
                                    <input type="text"
                                        id="hargaproduk"
                                        className='form-control mb-3'
                                        placeholder="Harga Produk"
                                        onChange={this.inputProductHarga}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <input type="button"
                                value="Save"
                                className='btn btn-info'
                                onClick={this.tambahProduct}
                             />
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
export default AddProduct;