import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios';
import TableAksiButtons from './TableAksiButtons';

class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <tr>
                <th scope="row">{this.props.data.id}</th>
                <td>{this.props.data.nama}</td>
                <td>{this.props.data.keterangan}</td>
                <td>{this.props.data.harga}</td>
                <td><TableAksiButtons rowId={this.props.data.id}/></td>
            </tr> 
        );
    }
}
 
export default TableRow;
