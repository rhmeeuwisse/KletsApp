import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

const AppHeader = ({userName}) => (
    <header className="PageHeader AppHeader">
        <img className="AppHeader-logo" src="/klets-logo.png" alt="Klets logo"/>
        <span className="AppHeader-title">
            <span className="AppHeader-maintitle">Klets/</span>
            <span className="AppHeader-subtitle">room for talk</span>
        </span>
    </header>
)

AppHeader.propTypes = {
    userName: PropTypes.string
}

export default AppHeader
