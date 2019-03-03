import React, { Component } from 'react';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:7070/api/products')
        .then ( response => {
            console.log('response ', response);
            return response.json(); // parse the content from server
        })
        .then (products => {
            console.log('products', products);
            this.setState({
                products
            })
        })
    }

    render() {
        return (
            <div>
                <h2>Product List</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>+Cart
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.products
                                      .map ( product => (
                                        <tr key={product.id}>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <button onClick={ ()=> {} }>
                                                    +Cart
                                                </button>
                                            </td>
                                        </tr>
                                      ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductList;