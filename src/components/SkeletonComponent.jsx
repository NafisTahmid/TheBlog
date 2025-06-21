import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonComponent = () => {
  return (
    <div className="card">
          <p className="title"><Skeleton/></p>
          <p className="description"><Skeleton count={10}/></p>
          <div className="control">
            <p className="author"><Skeleton width="70px"/></p>
          </div>
    </div>
  )
}

export default SkeletonComponent
