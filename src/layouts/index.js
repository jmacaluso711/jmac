import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'
import './devices.min.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="JMac"
      meta={[
        { name: 'description', content: 'jmac' },
        { name: 'keywords', content: 'jmac, zone' },
      ]}
    />
    <Header />
    <div className="content-wrapper">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
