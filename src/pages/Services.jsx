import React, { useEffect } from 'react'
import AOS from 'aos';
import Header from '../components/Hreader/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faCirclePlay, faGauge , faLayerGroup ,faArchway} from '@fortawesome/free-solid-svg-icons'
import { faDribbble,   } from '@fortawesome/free-brands-svg-icons'


const Services = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const titleServices="Services"
  const detailsServices = "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
  return (
    <div className="container d-flex align-items-center flex-column services"  data-aos="fade-up">
                <div className="section-title">
                    <Header title={titleServices} details={detailsServices} />
              </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box iconbox-blue">
                            <div className="icon">
                               
                                <FontAwesomeIcon icon={faDribbble}   size='4x'/>
                            </div>
                            <h4><a href="">Lorem Ipsum</a></h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                    </div>
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box iconbox-orange">
                            <div className="icon">
                                
                                <FontAwesomeIcon icon={faFileLines} size='4x' />
                            </div>
                            <h4><a href="">Sed Perspiciatis</a></h4>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box iconbox-pink">
                            <div className="icon">
                              
                                <FontAwesomeIcon icon={faGauge} size='4x'/>
                            </div>
                            <h4><a href="">Magni Dolores</a></h4>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box iconbox-yellow">
                            <div className="icon">
                               
                                <FontAwesomeIcon icon={faLayerGroup} size='4x'/>
                            </div>
                            <h4><a href="">Lorem Ipsum</a></h4>
                            <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box iconbox-red">
                            <div className="icon">
                              
                                <FontAwesomeIcon icon={faCirclePlay} size='4x' />
                            </div>
                            <h4><a href="">Dele Cardo</a></h4>
                            <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box iconbox-teal">
                            <div className="icon">
                                <FontAwesomeIcon icon={faArchway} size="4x" />

                            </div>
                            <h4><a href="">Divera Don</a></h4>
                            <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                        </div>
                    </div>    
                </div>
                    
            </div>
  )
}

export default Services