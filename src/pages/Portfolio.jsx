import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import Header from '../components/Hreader/Header';
import portfolio1 from '../assets/images/portfolio-1.jpg'
import portfolio2 from '../assets/images/portfolio-2.jpg'
import portfolio3 from '../assets/images/portfolio-3.jpg'
import portfolio4 from '../assets/images/portfolio-4.jpg'
import portfolio5 from '../assets/images/portfolio-5.jpg'
import portfolio6 from '../assets/images/portfolio-6.jpg'
import portfolio7 from '../assets/images/portfolio-7.jpg'
import portfolio8 from '../assets/images/portfolio-8.jpg'
import portfolio9 from '../assets/images/portfolio-9.jpg'
import { HandIndexFill } from 'react-bootstrap-icons';

const Portfolio = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  const titlePortfolio="portfolio"
  const detailsPortfolio = "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
  


  const data =[
    {
      image: portfolio1,
      title: 'App 1',
      subTitle : 'App',
      imageLink: "assets/images/portfolio-1.jpg",
      detailsLink : "portfolio-details.html",
      filterName: 'filter-app'
    },
    {
      image:portfolio2,
      title: 'Web 3',
      subTitle : 'Web',
      imageLink: "assets/images/portfolio-2.jpg",
      detailsLink : "portfolio-details.html",
      filterName: 'filter-web'
    },
    {
      image:portfolio3,
      title: 'App 2',
      subTitle : 'App',
      imageLink: "assets/images/portfolio-3.jpg",
      detailsLink : "portfolio-details.html",
      filterName: 'filter-app'
    },
    {
      image:portfolio4,
      title: 'Card 2',
      subTitle : 'Card',
      imageLink: "assets/images/portfolio-4.jpg",
      detailsLink : "portfolio-details.html",
      filterName: 'filter-card'
    },
    {
      image:portfolio5,
      title: 'Web 2',
      subTitle : 'Web',
      imageLink: "assets/images/portfolio-5.jpg",
      detailsLink : "portfolio-details.html",
      filterName: 'filter-web'
    },
    {
      image:portfolio6,
      title: 'App 3',
      subTitle : 'App',
      imageLink: "assets/images/portfolio-6.jpg",
      detailsLink : "portfolio-details.html",
      filterName: 'filter-app'
    },
    {
      image:portfolio7,
      title: 'Card 1',
      subTitle : 'Card',
      imageLink: "assets/images/portfolio-7.jpg",
      detailsLink : "portfolio-details.html",
      filterName: 'filter-card'
    },
    {
      image:portfolio8,
      title: 'Card 3',
      subTitle : 'Card',
      imageLink: "assets/images/portfolio-8.jpg",
      detailsLink : "portfolio-details.html",
      filterName: 'filter-card'
    },
    {
      image:portfolio9,
      title: 'Web 3',
      subTitle : 'Web',
      imageLink: "assets/images/portfolio-9.jpg",
      detailsLink : "portfolio-details.html",
      filterName: 'filter-web'
    },
  ]
  const [selectedItems, setSelectedItems] =useState([])
  useEffect(()=>{
    setSelectedItems(data)
  },[])

  const handleClick=(value)=>{
    console.log('name=', value)
    if (value !== "*" ){
      let newData  = data.filter(item => item.filterName === value)
      setSelectedItems(newData)
    }else {
      setSelectedItems(data)
    }
  }

  return (
      <div className="container d-flex align-items-center flex-column portfolio"  data-aos="fade-up">

      
        <div className="section-title">
          <Header title={titlePortfolio} details={detailsPortfolio} />
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li onClick={()=>handleClick("*")} className="filter-active">All</li>
                <li onClick={()=>handleClick("filter-app")}>App</li>
                <li onClick={()=>handleClick("filter-card")}>Card</li>
                <li onClick={()=>handleClick("filter-web")}>Web</li>
              </ul>
            </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {selectedItems.map((item,index)=>{
            return (
            <div className="col-lg-4 col-md-6 portfolio-item filter-app" key={index}>
              <div className="portfolio-wrap">
                  <img src={item.image} className="img-fluid" alt="" />
                  <div className="portfolio-info" >
                      <h4>{item.title}</h4>
                      <p>{item.subTitle}</p>
                      <div className="portfolio-links">
                        <a href={item.imageLink} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                        <a href={item.detailsLink} className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                      </div>
                    </div>
              </div>
            </div>
              )

          })}
          
      
            
        </div>
        
            
    </div>

  )
}

export default Portfolio

// <div className="col-lg-4 col-md-6 portfolio-item filter-app">
//               <div className="portfolio-wrap">
//                 <img src={portfolio1} className="img-fluid" alt="" />
                
//                 <div className="portfolio-info">
//                   <h4>App 1</h4>
//                   <p>App</p>
//                   <div className="portfolio-links">
//                     <a href="assets/images/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
  
//             <div className="col-lg-4 col-md-6 portfolio-item filter-web">
//               <div className="portfolio-wrap">
//                 <img src={portfolio2} className="img-fluid" alt="" />
//                 <div className="portfolio-info">
//                   <h4>Web 3</h4>
//                   <p>Web</p>
//                   <div className="portfolio-links">
//                     <a href="assets/images/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
  
//             <div className="col-lg-4 col-md-6 portfolio-item filter-app">
//               <div className="portfolio-wrap">
//                 <img src={portfolio3} className="img-fluid" alt="" />
//                 <div className="portfolio-info">
//                   <h4>App 2</h4>
//                   <p>App</p>
//                   <div className="portfolio-links">
//                     <a href="assets/images/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
  
//             <div className="col-lg-4 col-md-6 portfolio-item filter-card">
//               <div className="portfolio-wrap">
//                 <img src={portfolio4} className="img-fluid" alt="" />
//                 <div className="portfolio-info">
//                   <h4>Card 2</h4>
//                   <p>Card</p>
//                   <div className="portfolio-links">
//                     <a href="assets/images/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
  
//             <div className="col-lg-4 col-md-6 portfolio-item filter-web">
//               <div className="portfolio-wrap">
//                 <img src={portfolio5} className="img-fluid" alt="" />
//                 <div className="portfolio-info">
//                   <h4>Web 2</h4>
//                   <p>Web</p>
//                   <div className="portfolio-links">
//                     <a href="assets/images/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
  
//             <div className="col-lg-4 col-md-6 portfolio-item filter-app">
//               <div className="portfolio-wrap">
//                 <img src={portfolio6} className="img-fluid" alt="" />
//                 <div className="portfolio-info">
//                   <h4>App 3</h4>
//                   <p>App</p>
//                   <div className="portfolio-links">
//                     <a href="assets/images/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
  
//             <div className="col-lg-4 col-md-6 portfolio-item filter-card">
//               <div className="portfolio-wrap">
//                 <img src={portfolio7} className="img-fluid" alt="" />
//                 <div className="portfolio-info">
//                   <h4>Card 1</h4>
//                   <p>Card</p>
//                   <div className="portfolio-links">
//                     <a href="assets/images/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
  
//             <div className="col-lg-4 col-md-6 portfolio-item filter-card">
//               <div className="portfolio-wrap">
//                 <img src={portfolio8} className="img-fluid" alt="" />
//                 <div className="portfolio-info">
//                   <h4>Card 3</h4>
//                   <p>Card</p>
//                   <div className="portfolio-links">
//                     <a href="assets/images/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
  
//             <div className="col-lg-4 col-md-6 portfolio-item filter-web">
//               <div className="portfolio-wrap">
//                 <img src={portfolio9} className="img-fluid" alt="" />
//                 <div className="portfolio-info">
//                   <h4>Web 3</h4>
//                   <p>Web</p>
//                   <div className="portfolio-links">
//                     <a href="assets/images/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
//                     <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
  