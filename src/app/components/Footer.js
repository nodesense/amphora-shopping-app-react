import React, {useState} from 'react';

// functional component
// presentational component

const Footer = (props) => {
    console.log('Footer called', props);

    const [count, setCount] = useState(100);

    //deconstruct
    const {year, 
           company,
           address: {city, state},
           countries
        } = props;


    return (
        <div>
            <hr />
            <p>Copyrights @{year}, {company}</p>
            <p>City {city}, {state}</p>
            <p> {countries.join(', ')}</p>

            <p>Page Visit count {count} </p>
            <button onClick={() => setCount( count + 1) }>
             +1
            </button>

            {props.children}

        </div>
    )
}

export default Footer;