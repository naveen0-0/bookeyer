import React from 'react'
import { Link } from 'react-router-dom';

export default function Hero() {

    return (
        <div className="hero">
            <div className="heroText"><div>Download <br /> over 1.3 million books <br /> anywhere</div><Link className="upload" to="upload">Upload</Link></div>
            <div className="heroimgContainer"><img src={require('../images/book.svg')} alt="Book Reader" className="heroimg" /></div>
        </div>
    )
}
