import React from 'react';
import './services.css'
import {BsGithub} from 'react-icons/bs';
import {TbWorld} from 'react-icons/tb';
import {SiFreelancer} from 'react-icons/si';
import {BsServer} from 'react-icons/bs';
import {BsPhone} from 'react-icons/bs';
import {CgWebsite} from 'react-icons/cg';



const Services = () => {

    const skills = [
        {
            id: 1,
            icon: <BsGithub/>,
            title:"Git Version control",
            text:"lorem ipsum sit dolor lorem lorems"
        },
        {
            id: 2,
            icon:<BsPhone/>,
            title:"App Design",
            text:"Loremorem loremmmmm mmmm sdshfjh"
        },
        {
            id: 3,
            icon: <BsServer/>,
            title:"Back-end Development",
            text:"Back-end Development Back-end Development Back-end Development"
        },
        {
            id: 4,
            icon:<CgWebsite/>,
            title:"Frontend Development",
            text:"Back-end Development Back-end Development Back-end Development"
        },
        {
            id: 5,
            icon:<TbWorld/>,
            title:"Web Development",
            text:"Back-end Development Back-end Development Back-end Development"
        },
        {
            id: 6,
            icon:<SiFreelancer/>,
            title:"Freelancing",
            text:"Back-end Development Back-end Development Back-end Development"
        },

    ]
  return (
    <section id="services">
        <div className="services-con">
            <div className="services-title-con">
                <h5 className="services-tag">Services</h5>
                <h2 className="services-title">Skill-set</h2>
            </div>
            <div className="services-skills-con">
                <div className="services-skill">
                    {
                        skills.map(({icon, title, text}, id) =>{
                            return(
                                <div className="services-skill-con" key={id}>
                                    <div className="services-skill-icon">{icon}</div>
                                    <h5 className="services-skill-title">{title}</h5>
                                    <h6 className="services-skill-text">{text}</h6>
    
                                </div>
                            )
                        })
                    }
                    
                    {/* <div className="skill-con">
                        <div className="skill-icon">g</div>
                        <h5 className="skill-title">Git Version control</h5>
                        <h6 className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, ipsum?</h6>

                    </div>
                    
                    <div className="skill-con">
                        <div className="skill-icon">g</div>
                        <h5 className="skill-title">Git Version control</h5>
                        <h6 className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, ipsum?</h6>

                    </div>
                   
                    <div className="skill-con">
                        <div className="skill-icon">g</div>
                        <h5 className="skill-title">Git Version control</h5>
                        <h6 className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, ipsum?</h6>

                    </div>
                    
                    <div className="skill-con">
                        <div className="skill-icon">g</div>
                        <h5 className="skill-title">Git Version control</h5>
                        <h6 className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, ipsum?</h6>

                    </div>

                    <div className="skill-con">
                        <div className="skill-icon">g</div>
                        <h5 className="skill-title">Git Version control</h5>
                        <h6 className="skill-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, ipsum?</h6>

                    </div> */}

                </div>
            </div>
        </div>
    </section>
  )
}

export default Services