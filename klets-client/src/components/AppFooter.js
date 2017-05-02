import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

const AppFooter = ({userName}) => (
    <footer className="PageFooter AppFooter">
        <span>A React Redux sample app</span>
    </footer>
)

AppFooter.propTypes = {
    userName: PropTypes.string
}

export default AppFooter
