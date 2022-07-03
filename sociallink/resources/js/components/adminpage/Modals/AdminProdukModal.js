import React, { Component } from 'react'

class AdminProdukModal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="modal fade" id={"viewModalProduk"+this.props.modalId } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Product Detail</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <strong>{this.props.dataProduk.productname}</strong>
                        <hr/>
                        <strong>{this.props.dataProduk.productketerangan} </strong>
                        <hr/>
                        Harga: <strong>${this.props.dataProduk.productharga} </strong>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
  }
}

export default AdminProdukModal;