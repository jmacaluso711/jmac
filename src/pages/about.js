import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const GetInTouch = () => (
  <div>
    <Helmet
      title="JMac - Get In Touch"
      meta={[
        { name: 'description', content: 'about jmac' },
        { name: 'keywords', content: 'html, css, javascript, angular, react, front end developer, scss, web, ui, ux' },
      ]}
    />

    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{ width: '120px', height: '120px', overflow: 'hidden', borderRadius: '50%', marginBottom: '1.5rem', flexShrink: '0', marginRight: '2rem'}}>
        <img style={{ width: '100%', maxWidth: '100%' }} src="https://www.gravatar.com/avatar/e48aae86673267f1b807c4f489b69b2f?size=120" alt="John Macaluso"/>
      </div>
      <div>
        <h1>Hi from JMac</h1>
        <p>I'm a web craftsman with 8 years experience. My expertise is on the front end where use my knowledge of HTML, CSS and JS to create beautiful user interfaces. Currently, I'm a full time employee at <a href="http://www.hookandloopnyc.com/" target="_blank">Infor Hook &amp; Loop</a>, where I'm working with ES6, Angular and PostCSS to help create Infor Hook &amp; Loop's open source ecosystem.</p>
        <p>You can reach me at <a href="mailto: macaluso.john@gmail.com">macaluso [at] john [.] com</a></p>
      </div>
    </div>
    <section className="resume">

      <h1>Work Experience</h1>

      <div className="resume-section">
        <h3 className="resume-section__title">Software Engineer</h3>
        <p className="resume-section__time-period">Infor Hook &amp; Loop, March 2017 - Present</p>
        <p>Work with design system team architecting, building and maintaining the single source of truth documentation site for all of Infor’s front end libraries. In depth experience with Angular 2+ ecosystem along with PostCSS. Gained experience with Python backend with Wagtail CMS. Built UX prototypes for user testing. Also, served as UI developer with a high level of focus on interaction and animations of cutting edge prototype.</p>
      </div>

      <div className="resume-section">
        <h3 className="resume-section__title">Senior Front End Developer</h3>
        <p className="resume-section__time-period"> Constructive, June 2014 - March 2017</p>
        <p>Front end developer for various clients in the Non-profit and Education space. I create responsive websites using HTML, Sass, JS, React and PHP. Gained experience working with the WP REST API. Implement complex data visualizations with highcharts.js. Won Communication Arts “webpick of the day” for work done on climateworks.org</p>
      </div>

      <div className="resume-section">
        <h3 className="resume-section__title">Freelance,Front End Developer</h3>
        <p className="resume-section__time-period">Brandibble, June 2014 - February 2015</p>
        <p> I utilized my skills with HTML, Sass, jQuery and jinja to create elegant and responsive user interfaces for several restaurant’s websites. Gained familiarity with Python backend technologies. Gained experience with early stage startup in restaurant tech space.</p>
      </div>

      <div className="resume-section">
        <h3 className="resume-section__title">UX Design Immersive</h3>
        <p className="resume-section__time-period">General Assemb.ly, March 2014 - May 2014</p>
        <p>Immersive UX Design student at General Assembly. Exposed to all aspects of the process of design. User research, wireframing, Interaction design, prototyping, visual design, stakeholder interviews, user testing, heuristic audits, user flows, site mapping. Worked on real world projects. Design HR platform for charter school consultancy.</p>
      </div>

      <div className="resume-section">
        <h3 className="resume-section__title">Freelance, Front End Developer / Designer</h3>
        <p className="resume-section__time-period">Various Clients, January 2013 - March 2014</p>
        <p>Designer &amp; Front End Developer in charge of designing and building a variety of content heavy websites. HTML/CSS and jQuery. Other tasks include design and development of blogs and microsites. Performed cross browser testing and bug fixes. Worked under tight deadlines to deliver completed projects to clients.</p>
      </div>

      <div className="resume-section">
        <h3 className="resume-section__title">Freelance, WordPress Developer</h3>
        <p className="resume-section__time-period">BBC America, April 2012 - September 2012</p>
        <p>Responsible for monitoring multiple websites for global television network. Utilize HTML/CSS, PHP and jQuery to build out site features, including custom widgets and specialized blogs. Debug and fix cross browser display issues.</p>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <p>Front End Development, HTML/CSS, Sass, Less, PostCSS, Javascript, ReactJS, Angular, jQuery, Gulp, Webpack, Git, Terminal, Prototyping, WordPress, PHP, UX, UI, Adobe Creative Suite, Sketch, Familiarity with: Ruby on Rails, Python </p>
      </div>

      <div className="resume-section">

        <h2>Education</h2>

        <h3 className="resume-section__title">UXDi, May 2014</h3>
        <p style={{margin: '0px'}}>General Assemb.ly, New York, NY</p>
        <p style={{marginTop: '0px'}}>User Experience Design</p>

        <h3 className="resume-section__title">Bachelor of Arts, May 2003</h3>
        <p style={{margin: '0px'}}>University of Hartford, CT</p>
        <p style={{marginTop: '0px'}}>Member of the Lacrosse team</p>

      </div>

    </section>
  </div>
)

export default GetInTouch