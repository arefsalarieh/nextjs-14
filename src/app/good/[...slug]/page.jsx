import React from 'react'

const List = ({params}) => {
    return (
      <div>
        {params.slug.map(item=>{
            return <h1>{item}</h1>
        })}
      </div>
    )
}

export default List