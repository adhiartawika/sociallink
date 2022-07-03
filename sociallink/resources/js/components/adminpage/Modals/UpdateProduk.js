import axios from 'axios';
import React, { Component } from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class  UpdateProduk extends Component {
    constructor(props) {
        super(props);

        this.state = {
            produkId:null,
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
    updateProduct = (id) =>{
        axios.post('/update/produk/data', {
            produkId: id,
            produknama: this.state.productnama,
            produkketerangan: this.state.productketerangan,
            produkharga: this.state.productharga,
        }).then(() => {
            toast.success("Employee Update Successfully");

            setTimeout(() => {
                location.reload();
            },2500)
        })
    }
    render() { 
        return ( 
            <>
                <div className="modal fade" id={"updateModal"+this.props.modalId }  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        defaultValue={this.props.dataProduk.productname}
                                        onChange={this.inputProductNama}
                                    />
                                </div>  
                                <div className="form-group">
                                    <textarea className="form-control mb-3" 
                                    id="keteranganproduk" rows="3"
                                    defaultValue={this.props.dataProduk.productketerangan}
                                    onChange={this.inputProductKeterangan}
                                    />
                                </div>  
                                <div className="form-group">
                                    <input type="text"
                                        id="hargaproduk"
                                        className='form-control mb-3'
                                        defaultValue={this.props.dataProduk.productharga}
                                        onChange={this.inputProductHarga}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <input type="button"
                                value="Save"
                                className='btn btn-info'
                                onClick={this.updateProduct(this.props.modalId)}
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
 
export default UpdateProduk;