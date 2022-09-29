import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id="skills">
        <div className="skills-con">
          <div className="skills-text">
            <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fuga praesentium illo qui soluta cupiditate neque possimus pariatur? Repudiandae ipsam hic perferendis asperiores non cupiditate corrupti, dicta soluta. Harum, magni?</h4>
          </div>
          <div className="skill-con">
            
            <div class="flex-wrapper">
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart orange">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"
                    stroke-dasharray="90, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" class="percentage">Django</text>
                </svg>
              </div>
              
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart green">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"
                    stroke-dasharray="90, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" class="percentage">ReactJs</text>
                </svg>
              </div>

              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart blue">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"
                    stroke-dasharray="90, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" class="percentage">Python</text>
                </svg>
              </div>
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart blue">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circle"
                    stroke-dasharray="90, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" class="percentage">Javascript</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills