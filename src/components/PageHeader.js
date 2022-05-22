import React from 'react'

const PageHeader = (props) => {
  
  return (
    <div className='
        bg-stone-50
        text-center
        px-10 py-10
        text-stone-700
        border-b border-dashed border-b-stone-200
    '>
      <h2 className='text-4xl'>{props.frontmatter.title}</h2>
      <p>{props.frontmatter.description}</p>
    </div>
  )
}

export default PageHeader
