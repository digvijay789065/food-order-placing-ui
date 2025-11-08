import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = () => {
  return (
    <div className='flex justify-between mr-10'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default PageContent
