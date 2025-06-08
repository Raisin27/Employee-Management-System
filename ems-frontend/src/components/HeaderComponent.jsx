import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
        <header className='header'>
            <nav className="navbar navbar-light" style={ {backgroundColor : "#e3f2fd"}}>
                <a className="navbar-brand" href="">
                Employee Management System
                </a>
            </nav>
        </header>

    </div>
  )
}

export default HeaderComponent