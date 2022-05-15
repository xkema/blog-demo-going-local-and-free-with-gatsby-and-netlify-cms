// src/templates/default-template.js

import React from 'react'
import Layout from '../components/Layout.js';

const DefaultTemplate = (props) => {

  console.log(props);

  return (
    <Layout>
      <div>
        <h1>Default Template</h1>
      </div>
    </Layout>
  )
}

export default DefaultTemplate
