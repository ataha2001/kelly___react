import React, { useEffect } from 'react'
import * as Icon from 'react-bootstrap-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Hreader/Header'
import about from '../assets/images/about.jpg'
import Progress from '../components/Progress/Progress';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const titleAbout="about"
  const detailsAbout="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
  const titleSkill ="Skills"
  const detailsSkill ="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
  const titleFacts ="Facts"
  const detailsFacts ="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."
  
  
  const skillJavaScritp="JavaScript"
  const skillJavaSciprValue="75"

  const skillHtml="HTML"
  const skillHtmlValue="100"

  const skillCss="CSS"
  const skillCssValue="90"

  const skillPhp="PHP"
  const skillPhpValue="80"

  const skillCms="WORDPRESS/CMS"
  const skillCmsValue="90"

  const skillShop="PHOTOSHOP"
  const skillShopValue="55"


  return (
    <div className="container d-flex align-items-center flex-column "  data-aos="fade-up">
      <div className="section-title">
        <Header title={titleAbout} details={detailsAbout} />
        <div className="card border-0 mb-3" style={{maxWidth: '100%'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={about} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start">
              <h5 className="card-title text-start fs-3 ">Illustrator & UI/UX Designer</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              <div className="row mt-3">
                <div className="col-lg-6">
                    <ul>
                      <li className='mt-2'><i className="bi bi-rounded-right"></i> <strong>Birthday:</strong> 1 May 1995</li>
                      <li className='mt-2'><i className="bi bi-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                      <li className='mt-2'><i className="bi bi-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                      <li className='mt-2'><i className="bi bi-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                      <li className='mt-2'><i className="bi bi-rounded-right"></i> <strong>Age:</strong> 30</li>
                      <li className='mt-2'><i className="bi bi-rounded-right"></i> <strong>Degree:</strong> Master</li>
                      <li className='mt-2'><i className="bi bi-rounded-right"></i> <strong>PhEmailone:</strong> email@example.com</li>
                      <li className='mt-2'><i className="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                    </ul>
                </div>
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                </p>
              </div>

            </div>
          </div>
          </div>
        </div>
      </div>
      <Header title={titleSkill} details={detailsSkill} />
      <div className='row w-100'>
        <div className='col-lg-6'>
          <Progress skillName={skillHtml} skillValue={skillHtmlValue} /> 
          <Progress skillName={skillCss} skillValue={skillCssValue} />         
          <Progress skillName={skillJavaScritp} skillValue={skillJavaSciprValue} /> 
        </div>
        <div className='col-lg-6'>
          <Progress skillName={skillPhp} skillValue={skillPhpValue} /> 
          <Progress skillName={skillCms} skillValue={skillCmsValue} />         
          <Progress skillName={skillShop} skillValue={skillShopValue} /> 
        </div>
      </div>
      <Header title={titleFacts} details={detailsFacts} />
      

    </div>
  )
}

export default About