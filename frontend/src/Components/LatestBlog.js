import React from 'react';
import './style.css'

const LatestBlog = () => {
    return (
        <div className="latest-blog">
            <div className="container">
                <div className="title-all text-center">
                    <h1>Latest Blog</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-box">
                            <img className="img-fluid" src="images/blog-img.jpg" alt="Blog" />
                            <div className="blog-content">
                                <h3>Fusce in augue non nisi fringilla</h3>
                                <p>Nulla ut urna egestas, porta libero id, suscipit orci.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlog;