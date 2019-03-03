// Checkout.js
import React, { Component } from 'react';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            phone: '',
            state: '',
        }
    }

    onInputChange = (e) => {
        // target is real dom element input/select/... controls
        console.log(e.target.name, e.target.value);

        // set the state from input change
        // this call render 
        // then v.dom shall be updated with state values
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>

                <form>
                    Full Name 
                    <input name="fullName"
                           type="text"
                           value={this.state.fullName}
                           onChange={this.onInputChange}
                    />

                    Email
                    <input name="email"
                           type="text"
                           value={this.state.email}

                           onChange={this.onInputChange}
                    />

                    Phone
                    <input name="phone"
                           type="number"
                           value={this.state.phone}

                           onChange={this.onInputChange}
                    />

                    State

                    <select name="state"
                            value={this.state.state}
                           onChange={this.onInputChange}
                    >
                        <option value='AP'> AP </option>
                        <option value='KA'> KA </option>
                        <option value='KL'> KL </option>
                        <option value='TN'> TN </option>
                        <option value='TS'> TS </option>
                    </select>

                    
                    <button type="submit">
                        Save
                    </button>

                </form>
            </div>
        );
    }
}

export default Checkout;