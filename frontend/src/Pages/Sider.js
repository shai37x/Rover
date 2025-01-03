import React from 'react';
import '../Components/style.css'
const Slider = () => {
    return (
        <div id="slides-shop" className="cover-slides">
            <ul className="slides-container">
                <li className="text-left">
                    <img src="images/banner-01.jpg" alt="" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="m-b-20"><strong>Welcome To <br /> Rover</strong></h1>
                                <p className="m-b-40">See how your users experience your website in realtime or view trends.</p>
                                <p><a className="btn hvr-hover" href="#">Shop New</a></p>
                            </div>
                        </div>
                    </div>
                </li>
  
            </ul>
            <div className="slides-navigation">
                <a href="#" className="next"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                <a href="#" className="prev"><i className="fa fa-angle-left" aria-hidden="true"></i></a>
            </div>
        </div>
    );
};

export default Slider;