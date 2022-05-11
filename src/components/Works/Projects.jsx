import './ProjectsStyle.css'
import Button from '../Button/Button'
import frame from '../img/chrome-frame.png'
import { useState } from 'react'

const Projects = () => {

  const [projects, setProjects] = useState(true)
  const [work, setWork] = useState(true)
  console.log(projects, work)

    return (
      <div id='projects' className={`projects-page`} >
          <h1 className='title'>Work & Projects</h1>
          <div className='projects-container'>
              <div className='project-filters'>
                <div onClick={() => {setProjects(true); setWork(true)}}>
                  <Button text={'All'} />
                </div>
                <div onClick={() => {setProjects(true); setWork(false)}}>
                  <Button text={'Projects'} />                
                </div>
                <div onClick={() => {setProjects(false); setWork(true)}}>
                  <Button text={'Work'} />            
                </div>
              </div>
              <div id='projects' style={{'display': projects ? 'flex' : 'none'}} className='project'>
                  <div className='img-container'><img id='frame' src={frame} alt="web frame image" /><img id='project-img' src='https://d3fiiq5m7gf6b3.cloudfront.net/luna-cauldron.png' alt="project image" /></div>
                  <div className='text'>
                      <h2>Luna's Cauldron</h2>
                      <span className='techs' id='tailwind'>
                      <p>HTML</p>
                      <p>Tailwind</p>
                      <p>Javascript</p>
                      <p>React</p>
                      <p>Nextjs</p>
                      <p>Sanity</p> 
                      <p>GROQ</p> 
                      <p>GraphQL</p> 
                      </span>
                      <div className='job-description'>
                          <span>
                            A full stack Next.Js app utilizing the Sanity.io headless CMS and Content Lake to populate a e-commerce template I built using React and TailwindCSS. Stripe integrated so customers can start placing orders today.
                            <br />
                            <br />
                            I'm using this template to approach small online shops with the proposition of having their own store outside of sites like Etsy and Ebay who take up to 25% in fees per transaction. 
                            Using Sanity and its Content Lake allows the user to easily update products, images, and text in the template. I've used Sanity's own GraphQL API called GROQ to query and display data on dynamic components. 
                            <br />
                            <br />
                            Currently the site reaches a Lighthouse SEO score of 90% and a 81% on overall Performance thanks to Next.js server side rendered content and product pages. Though this site is limited to smaller shops, I could easily connect Shopify and Shipstation to scale a storefront.
                          </span>
                      </div>
                      <div className='button'>
                          <Button link="https://lunas-cauldron.vercel.app/" text={'Live Demo'}/>
                          <Button link="https://github.com/luna-cuevas/lunas-cauldron" text={'Github Repo'} />
                      </div>
                  </div>
              </div>
              <div id='projects' style={{'display': projects ? 'flex' : 'none'}} className='project'>
                  <div className='img-container'><img id='frame' src={frame} alt="web frame image" /><img id='project-img' src='https://d3fiiq5m7gf6b3.cloudfront.net/Screen Shot 2022-04-26 at 12.11.47 PM.png' alt="project image" /></div>
                  <div className='text'>
                      <h2>Designo</h2>
                      <span className='techs' id='tailwind'>
                      <p>HTML</p>
                      <p>Tailwind</p>
                      <p>Javascript</p>
                      <p>React</p>
                      <p>Nextjs</p>
                      <p>Figma</p> 
                      </span>
                      <div className='job-description'>
                          <span>Designo is a  fictitious design company focusing on mobile, web, and graphic design. I pulled the design and asset files from a FrontEndMentor challenge but only the assets and design file were provided. To build this project I used React, Nextjs, and Tailwind to create a multipage, mobile responsive, and cross-browser functional website. <br /> <br /> Because I used Nextjs, I was able to leverage its power to prerender images which results in a Lighthouse  score of 95.</span>
                      </div>
                      <div className='button'>
                          <Button link="https://team-designo.netlify.app/" text={'Live Demo'}/>
                          <Button link="https://github.com/luna-cuevas/designo" text={'Github Repo'} />
                      </div>
                  </div>
              </div>
              <div id='projects' style={{'display': projects ? 'flex' : 'none'}} className='project'>
                  <div className='img-container'><img id='frame' src={frame} alt="web frame image" /><img id='project-img' src='https://d3fiiq5m7gf6b3.cloudfront.net/seekr.png' alt="project image" /></div>
                  <div className='text'>
                      <h2>Job Seekr</h2>
                      <span className='techs' id='tailwind'>
                      <p>HTML</p>
                      <p>Sass</p>
                      <p>Javascript</p>
                      <p>React</p> 
                      </span>
                      <div className='job-description'>
                          <span>Job Seekr is a small app built on the react framework that aims to bring... just kidding. This small project is a showcase of the cool filtering capabilities I've been learning. Though the database is just a static JSON file, I  could easily create an API endpoint to fetch job data from a third party source. Unfortunately, job apis are surprisingly inaccessible and expensive. You can view a live demo below.</span>
                      </div>
                      <div className='button'>
                          <Button link="https://job-seekr.netlify.app/" text={'Live Demo'}/>
                          <Button link="https://github.com/luna-cuevas/seekr" text={'Github Repo'} />
                      </div>
                  </div>
              </div>
              <div id='projects' style={{'display': projects ? 'flex' : 'none'}} className='project'>
                  <div className='img-container'><img id='frame' src={frame} alt="web frame image" /><img id='project-img' src='https://d3fiiq5m7gf6b3.cloudfront.net/spotify-clone.jpeg' alt="project image" /></div>
                  <div className='text'>
                      <h2>Spotify Clone</h2>
                      <span className='techs' id='tailwind'>
                      <p>HTML</p>
                      <p>Tailwind CSS</p>
                      <p>Javascript</p>
                      <p>React</p> 
                      <p>Next.js</p>                        
                      <p>Spotify API</p>                        
                      </span>
                      <div className='job-description'>
                          <span>I wanted to learn how to use Tailwind CSS and NextAuth so I grabbed the Spotify API and tried to replicate some of Spotify's functionality. Next steps are adding an audio visualizer using P5. Currently you will need to have an active session of the spotify app open to view this project.</span>
                          <p>• Using NextAuth and the Spotify API, I created a login session that checks if the user's credentials are valid on the server side. If not, the user is redirected to the login screen.</p>
                          <p>• Then I found a node wrapper/client for the API and used that to fetch ids, album name, songs, artist, and playback times from the Spotify Web API. </p>
                          <p>• Using the Spotify node wrapper, I created functions that control the volume, pause/play, and next/prev buttons.</p>
                      </div>
                      <div className='button'>
                          <Button link="https://spotify-clone-luna-cuevas.vercel.app/" text={'Live Demo'}/>
                          <Button link="https://github.com/luna-cuevas/spotify-clone" text={'Github Repo'} />
                      </div>
                  </div>
              </div>
              <div id='work' style={{'display': work ? 'flex' : 'none'}} className='project'>
                  <div className='img-container'><img id='frame' src={frame} alt="web frame image" /><img id='project-img' src='https://d3fiiq5m7gf6b3.cloudfront.net/dk.png' alt="project image" /></div>
                  <div className='text'>
                      <h2>Dolls Kill</h2>
                      <span className='techs'>
                      <p>HTML</p>
                      <p>CSS/SCSS</p>
                      <p>Javascript</p>
                      <p>React</p> 
                      <p>PHP</p>                                               
                      <p>Next.js</p>                        
                      <p>Layer0</p>                        
                      </span>
                      <div className='job-description'>
                          <span>I initially started as a support representative but was able to connect with the engineers and assisted them with visual updates in their Next.js and Magento powered app.</span>
                          <p>• Improved UX/UI of navigation bar to be consistent with the mobile/tablet experience and removed bugs related to resizing.</p>
                          <p>• Updated Magento 2 HTML blocks within a Next.js environment and coordinated with the site merchandising team to update navigation links and nav tiles in M2.</p>
                          <p>• Working with the product owner and UX designer, I implemented a redesign of the ‘Collabs’ submenu.</p>
                          <p>• Attended daily standup meetings and tracked my work using a Jira board and bitbucket version control system. This is an agile team.</p>
                      </div>
                      <div className='button'>
                          <Button link="https://www.dollskill.com/" text={'Live Demo'}/>
                      </div>
                  </div>
              </div>
              <div id='work' style={{'display': work ? 'flex' : 'none'}} className='project'>
                  <div className='img-container'><img id='frame' src={frame} alt="web frame image" /><img id='project-img' src='https://d3fiiq5m7gf6b3.cloudfront.net/janp_v2.png' alt="project image" /></div>
                  <div className='text'>
                  <h2>Jazz And Print</h2>
                  <span className='techs'>
                      <p>HTML</p>
                      <p>CSS/SCSS</p>
                      <p>Javascript</p>
                      <p>PHP</p>                        
                  </span>
                  <span>This client reached out requesting an update to their printing shop webpage. Run on a PHP-based CMS, some of the challenges included finding overwritten style sheets and modifying PHP code to improve UX. The goal was to improve the design, optimize SEO keywords, and generate more web traffic. Features implemented:</span>
                  <p>• Increased SEO rating from 22% to 91%, fixed meta tags, improved sitemap. </p>
                  <p>• Improved user experience across browsers and devices.</p>
                  <p>• Increased web traffic by 31%.</p>
                  <p>• Updated image carousel to include a colorful progress bar.</p>
                  <p>• Designed 10 product mockups and banners for display on home page.</p>
                  <div className='button'>
                      <Button link="https://store.jazzandprint.com/" text={'Live Demo'}/>
                      <Button link="https://github.com/luna-cuevas/jazzandprint" text={'Github Repo'} />
                  </div>
              </div>
              </div>
              <div id='work' style={{'display': work ? 'flex' : 'none'}} className='project'>
                  <div className='img-container'><img id='frame' src={frame} alt="web frame image" /><img id='project-img' src='https://d3fiiq5m7gf6b3.cloudfront.net/brooke.jpeg' alt="project image" /></div>
                  <div className='text'>
                      <h2>Client Portfolio</h2>
                      <span className='techs'>
                          <p>HTML</p>
                          <p>CSS/SCSS</p>
                          <p>Javascript</p>
                          <p>React</p>                        
                      </span>
                      <span>The task was to design a captivating portfolio for a professional roller skater. Key features requested were 80s themes, pastel colors, blog-style graphics, and an emphasis on video playback. Features implemented:</span>
                      <p>• <b>Responsive design</b> suitable for all devices.</p>
                      <p>• Play on hover feature implemented using <b>Vimeo Player API</b>.</p>
                      <p>• Utilized vibrant colors to match the skater's style and brand.</p>
                      <p>• Implemented a mix of <b>Bootstrap</b> and custom CSS styling to fix videos onto a carousel.</p>
                      <p>• Routed a custom contact page using <b>PHP</b> to send client inquiries.</p>
                      <div className='button'>
                          <Button link="https://brooke-cordelia.com/" text={'Live Demo'}/>
                          <Button link="https://github.com/luna-cuevas/Cordelia_Portfolio" text={'Github Repo'} />
                      </div>
                  </div>
              </div>
              <div id='projects' style={{'display': projects ? 'flex' : 'none'}} className='project'>
                  <div id='trvl-img'className='img-container'><img id='frame' src={frame} alt="web frame image" /><img id='project-img' src='https://d3fiiq5m7gf6b3.cloudfront.net/travel%20advisor.png' alt="project image" /></div>
                  <div id='trvl-text' className='text'>
                      <h2>Attractions Advisor</h2>
                      <span className='techs'>
                          <p>HTML</p>
                          <p>CSS</p>
                          <p>Javascript</p>
                          <p>Material</p>                        
                      </span>
                      <span>The goal of this <b>React</b> application is to help users find local eateries, attractions, and hotels in their area. Using the Travel Advisor and Google Maps APIs, the user can search their locale attractions based on ratings ranging from 3 to 5 stars. Other information includes weather information, awards, phone numbers, and rankings. Features implemented:
                      </span>
                      <p>
                      • Utilized <b>Google Maps API</b> to show accurate location for attractions.  
                      </p>
                      <p>
                      • Scraped business information like address, phone number, ratings, and awards from the <b>Travel Advisor API</b>.
                      </p>
                      <p>• Populated the map with small product cards accurately displaying location of attractions.</p>
                      <p>• Implemented a <b>responsive design</b> by using Material UI.</p>
                      <div className='button'>
                          <Button link="https://trvler.netlify.app/" text={'Live Demo'}/>
                          <Button link="https://github.com/luna-cuevas/travel-advisor" text={'Github Repo'} />
                      </div>
                  </div>
              </div>
              <div id='projects' style={{'display': projects ? 'flex' : 'none'}} className='project'>
                  <div className='img-container'><img id='frame' src={frame} alt="web frame image" /><img id='project-img' src='https://d3fiiq5m7gf6b3.cloudfront.net/todo.png' alt="todo app image" /></div>
                  <div className='text'>
                      <h2>Task Tracker</h2>
                      <span className='techs'>
                          <p>HTML</p>
                          <p>CSS</p>
                          <p>Material</p>
                          <p>Javascript</p>
                          <p>React</p>                        
                      </span>
                      <span>A simple but elegant task tracker using Material-UI, React, and the Spotify API to create an elevated and productive workflow:</span>
                      <p>• Added a Spotify media player with a relaxing playlist to enhance  ambiance.</p>
                      <p>• Leveraged Material-UI components to create a responsive, elegant design.</p>
                      <p>• Utilized local storage to hold todo items.</p>
                      <div className='button'>
                          <Button link="https://task-trkr.netlify.app/" text={'Live Demo'}/>
                          <Button  link="https://github.com/luna-cuevas/task-trkr" text={'GitHub Repo'}/>
                      </div>
                  </div>  
              </div>
          </div>
      </div>
    )
}

export default Projects
