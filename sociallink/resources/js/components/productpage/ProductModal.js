import React, { Component } from 'react'

class ProductModal extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
        <div className="modal fade" id={"viewModal"+this.props.modalId } tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Product Detail</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <strong>{this.props.productData.productname} </strong>
                        <hr/>
                        <strong>{this.props.productData.productketerangan} </strong>
                        <hr/>
                        Price: <strong>${this.props.productData.productharga} </strong>
                </div>
                <div className="modal-footer">
                </div>
                </div>
            </div>
        </div>
    )
  }
}

export default ProductModal;