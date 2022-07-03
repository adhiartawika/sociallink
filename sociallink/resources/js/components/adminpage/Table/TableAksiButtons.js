import React, { Component } from 'react'
import AdminProdukModal from "../Modals/AdminProdukModal";
import DeleteProdukModal from '../Modals/DeleteProdukModal';
import UpdateProduk from '../Modals/UpdateProduk';

class TableAksiButtons extends Component {
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
    render() {
        return (
            <div className="btn-group" role="group">
                <button type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={'#viewModalProduk'+this.props.rowId}
                    onClick={ () => { this.getProdukDetails(this.props.rowId) }}
                >
                    View
                </button>
                <AdminProdukModal modalId={this.props.rowId} dataProduk={ this.state }/>

                <button type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target={'#updateModal' + this.props.rowId}
                    onClick={() => { this.getProdukDetails(this.props.rowId) }}
                >
                    Update
                </button>
                <UpdateProduk modalId={this.props.rowId} dataProduk={ this.state }/>

                <button type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={'#deleteModal' + this.props.rowId}
                    onClick={() => { this.getProdukDetails(this.props.rowId) }}
                >
                    Delete
                </button>
                <DeleteProdukModal  modalId={this.props.rowId} dataProduk={ this.state }/>
            </div>
        )
    }
}
 
export default TableAksiButtons;
