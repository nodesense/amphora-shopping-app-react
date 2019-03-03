// CartItem.js
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    // 1. Creation cycle method, called when component created
    constructor(props) {
        super(props);

        console.log('CartItem created', this.props.item);
    }
 
    // Called after first render 
    // Virtual DOM is placed into real dom
    // 3. Creation Cycle Method.
    componentDidMount() {
        console.log('CartItem did mount', this.props.item);
    }

    // 2. Creation Cycle Method + also 
    // Update Cycle method, setState, forceUpdate, or when parent render called
   
    render() {
        let {item,
             removeItem,
             updateItem} = this.props;

        console.log("CartItem Render ", item.id);

        return (
            <tr>
                <td>{item.name} </td>
                <td>{item.price}</td>
                <td>{item.qty}</td>
                <td>{item.price * item.qty}</td>
                <td> 
                <button onClick={() => updateItem(item.id, item.qty + 1) }>
                        +1
                </button>    

                <button onClick={ () => updateItem(item.id, item.qty - 1) }>
                        -1
                </button>    
                <button onClick={ () => removeItem(item.id) }>
                        X
                </button>
                </td>
            </tr>
        )
    }


    // destruction life cycle method
    // called before component removed
    // cleanup
    componentWillUnmount() {
        console.log('CartItem componentWillUnmount ', this.props.item);
    }

} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}