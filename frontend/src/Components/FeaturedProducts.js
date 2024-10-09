import React from 'react';
import './style.css'


const FeaturedProducts = () => {
    return (
        <div className="products-box">
            <div className="container">
                <div className="title-all text-center">
                    <h1>Featured Products</h1>
                    <p>Lorem</p>
                </div>
                <div className="row special-list">
                    <div className="col-lg-3 col-md-6 special-grid best-seller">
                        <div className="products-single fix">
                            <img src="images/img-pro-01.jpg" className="img-fluid" alt="Product" />
                            <div className="why-text">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <h5>250Rs</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 special-grid top-featured">
                        <div className="products-single fix">
                            <img src="images/img-pro-02.jpg" className="img-fluid" alt="Product" />
                            <div className="why-text">
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <h5>$9.79</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;