import React from 'react'
import Logo from '../Logo'
import Github from '../Icons/Github'
import Linkedin from '../Icons/Linkedin'
import ArrowDown from '../Icons/ArrowDown'
import ArrowExternal from '../Icons/ArrowExternal'
import Link from 'gatsby-link'
import './index.css'

const Header = () => (
  <header>
    <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', position: 'fixed', bottom: '0px', right: '0px', height: '60px', width: '100%', zIndex: '1000'}}>
      <Link to="/about/">About</Link>
      <a className="text-link text-link--ext" target="_blank" href="https://github.com/jmacaluso711"><span>GitHub</span><ArrowExternal color="#fff"></ArrowExternal></a>
      <a className="text-link text-link--ext" target="_blank" href="https://www.linkedin.com/in/macalusojohn/"><span>LinkedIn</span><ArrowExternal color="#fff"></ArrowExternal></a>  
    </nav>
    <div>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{display: 'block'}}>
          <Logo></Logo>
        </Link>
      </h1>
      <p className="intro-sentence" style={{maxWidth: '600px', padding: '0 1rem'}}>I'm a front end developer that loves to craft web experiences.</p>
    </div>
    <ArrowDown></ArrowDown>
  </header>
)

export default Header