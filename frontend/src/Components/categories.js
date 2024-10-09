import React from 'react';
import './style.css'
const Categories = () => {
    return (
        <div className="categories-shop">
            <div className="container">
                <div className="row row-one"> 
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/t-shirts-img.jpg" alt="T-shirts" />
                            <a className="btn hvr-hover" href="#">T-shirts</a>
                        </div>
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/shirt-img.jpg" alt="Shirt" />
                            <a className="btn hvr-hover" href="#">Shirt</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/wallet-img.jpg" alt="Wallet" />
                            <a className="btn hvr-hover" href="#">Wallet</a>
                        </div>
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/women-bag-img.jpg" alt="Bags" />
                            <a className="btn hvr-hover" href="#">Bags</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/shoes-img.jpg" alt="Shoes" />
                            <a className="btn hvr-hover" href="#">Shoes</a>
                        </div>
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/women-shoes-img.jpg" alt="Women Shoes" />
                            <a className="btn hvr-hover" href="#">Women Shoes</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;