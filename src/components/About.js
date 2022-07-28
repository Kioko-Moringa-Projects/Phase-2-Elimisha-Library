import React from 'react';
import './App.css';
function About()
{
    
    return(
        <div>
            <div className='container'>
           <div className='row justify-content-evenly py-5'>
               <div className='col-sm-8 col-md-5'>
                   <img className='img-fluid' src="https://www.impactbnd.com/hubfs/blog-image-uploads/best-about-us-pages.jpg" alt="aboutus img"/>
               </div>
               <div className='col-12 col-md-6 mt-5 mt-md-0'>
                 <h2 className='mb-0'>Elimisha library </h2>
                 <h1 style={{fontWeight:900}}>We care about your learning</h1>
                 <p style={{fontWeight: 300}}>Home to thousands of books across different categories.</p>
                  
               </div>
           </div>
        </div>
        </div>
);

}
export default About;