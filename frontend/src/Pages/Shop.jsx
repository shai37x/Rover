import React from 'react'
import FeaturedProducts from '../Components/FeaturedProducts'
import Slider from './Sider'
import LatestBlog from '../Components/LatestBlog'
import Categories from '../Components/categories'
import '../Components/style.css'        
import Footer from '../Components/Footer'
export const shop = () => {
  return (
    
<div className="container"> 
<>
            <Slider />
            <Categories />
            <FeaturedProducts />
            <LatestBlog />
            
        </>
 
                
            </div>
  )
}
export default shop