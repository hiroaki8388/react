import React from 'react';
import PropTypes from 'prop-types'
export default function Hello(props) {
    return <h1>Hello! {props.name} </h1>;
}

Hello.propTypes={
    name :PropTypes.string.isRequired
}

export const Greeting =(props)=>{
return(    <div>
      <div>  Greeting</div>
        {props.children}
        </div>
)
}

export const HelloFragment = () => {
    return (
        <React.Fragment>
            <div> こんにちは</div>
            <div> Hello</div>
        </React.Fragment>
    )
}