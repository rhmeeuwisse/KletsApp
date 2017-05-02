import React from 'react'
import PropTypes from 'prop-types'
import './Style.css'

const AppHeader = ({userName}) => (
    <header className="PageHeader App-header">
        <img className="App-logo" src="/klets-logo.png" alt="App logo"/>
        <span className="App-title">
            <span className="App-maintitle">Klets/</span>
            <span className="App-subtitle">room for talk</span>
        </span>
    </header>
)

AppHeader.propTypes = {
    userName: PropTypes.string
}

export default AppHeader
