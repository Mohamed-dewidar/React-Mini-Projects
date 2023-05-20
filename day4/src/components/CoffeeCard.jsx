import React from 'react'

export function CoffeeCard({item}) {

    const {type, description} = item
  return (
    <div className='coffee-card bg-light d-flex flex-column gap-2 justify-content-center align-items-start'>
        <h1 className='text-danger mx-2' dangerouslySetInnerHTML={{__html: item.type}}></h1>
        <p className='lead text-in mx-5' dangerouslySetInnerHTML={{__html: item.description}}></p>
    </div>
  )
}
