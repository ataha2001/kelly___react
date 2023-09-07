import React from 'react'

const Home = () => {
  return (
    <section id="hero" className="d-flex align-items-center " >
        <div className="container d-flex align-items-center flex-column "  data-aos="zoom-in" data-aos-delay="100">
            <h1 className="d-block">Kelly Adams</h1>
            <h2 className="d-block">I'm a professional illustrator from San Francisco</h2>
            <a className="btn-about" >
                about me
            </a>
        </div>
    </section>
  )
}

export default Home