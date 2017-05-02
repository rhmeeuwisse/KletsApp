import React from 'react'
import PropTypes from 'prop-types'
import './Style.css'

const AppHeader = ({userName}) => (
    <header className="App-header">
        <img className="App-logo" src="/klets-logo.png" />
        <span className="App-title">Klets - room for talk</span>
    </header>
)

AppHeader.propTypes = {
    userName: PropTypes.string
}

export default AppHeader
