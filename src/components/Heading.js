import React from 'react'

const Heading = ({ name, role }) => {
    return (
        <div className='text-start border-bottom border-2 mb-5 border-mute'>
            <h1 className='display display-4 text-decoration-none link-primary'>
                {name}</h1>
            <h2 className='fs-5 display text-success text-uppercase '>{role}</h2>
        </div>
    )
}

export default Heading