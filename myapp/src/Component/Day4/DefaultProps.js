import React from 'react'
export default function DefaultProps(props)
{
    return (
        <div>
            <h1>DEFAULT PROPS EXAMPLE</h1>
            <h1>Default value is {props.name}</h1>
        </div>
    )
}
DefaultProps.defaultProps={
    name:"OM JAI MAHA KALLI!"
}