import React from 'react'
// Code Keypad Component Here

class Keypad extends React.Component {

    upHandler = () =>{
        console.log('Entering password...')
    }
    render (){
        return <input onKeyUp={this.upHandler} type="password" /> 
    }
}

export default Keypad