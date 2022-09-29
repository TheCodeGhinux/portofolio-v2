import React from 'react'
import './portfolio.css'
import img from '../../assets/codeghinux.png'


const Portfolio = () => {
  const clients = [
    {
        id: 1,
        icon: img,
        title:"Store landing page",
        text:"lorem ipsum sit dolor lorem lorems"
    },
    {
        id: 2,
        icon:img,
        title:"Watermarking app",
        text:"Loremorem loremmmmm mmmm sdshfjh"
    },
    {
        id: 3,
        icon: img,
        title:"Cute themed clock",
        text:"Back-end Development Back-end Development Back-end Development"
    },
    {
        id: 4,
        icon:img,
        title:"Web store",
        text:"Back-end Development Back-end Development Back-end Development"
    },
    {
        id: 5,
        icon:img,
        title:"Portfolio v2",
        text:"Back-end Development Back-end Development Back-end Development"
    },
    {
        id: 6,
        icon:img,
        title:"Calculator",
        text:"Back-end Development Back-end Development Back-end Development"
    },

]
return (
<section id="portfolio">
    <div className="portfolio-con">
        <div className="portfolio-title-con">
            <h5 className="portfolio-tag">Portfolio</h5>
            <h2 className="portfolio-title">Projects</h2>
        </div>
        <div className="portfolio-skills-con">
            <div className="portfolio-skill">
                {
                    clients.map(({icon, title, text}, id) =>{
                        return(
                            <div className="project-con" key={id}>
                                <div className="project-img">
                                  <img src={icon} alt="" srcset="" />
                                </div>
                                <h5 className="portfolio-skill-title">{title}</h5>
                                {/* <h6 className="portfolio-skill-text">{text}</h6> */}

                            </div>
                        )
                    })
                }
                

            </div>
        </div>
    </div>
</section>
)
}


export default Portfolio