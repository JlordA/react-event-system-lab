import React from 'react'
// Code EyesOnMe Component Here
class EyesOnMe extends React.Component {

    focusHandler = () => {
        console.log('Good!')
    }
    
    blurHandler = () => {
        console.log('Hey! Eyes on me!')
    }
    
    render() {
        return <button onFocus={this.focusHandler} onBlur={this.blurHandler} />
    }
}

export default EyesOnMe
