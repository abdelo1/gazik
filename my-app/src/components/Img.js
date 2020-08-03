import React, { Component } from 'react';

class Img extends Component {
    render() {
        const {alt,src}=this.props
        return (
            <div >
                 <img src={src} alt={alt}/>   
            </div>
           
        );
    }
}

export default Img;