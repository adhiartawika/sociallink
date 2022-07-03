import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import AddProduct from './Modals/AddProduk';
import TableRow from './Table/TableRow';

class Dashboard extends Component {
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
        <div className='card-wrapper-dashboard'>
            <div className="card-header">Product Management</div>
            <div className="card-body">
                <AddProduct/>
                <div className="card">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Keterangan</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.produk.map(function(x,i){
                                return <TableRow key={i} data={x}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      );
    }
}
 
export default Dashboard;
if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}