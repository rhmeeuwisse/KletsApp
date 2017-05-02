import React from 'react'
import PropTypes from 'prop-types'
import './Style.css'

const AppFooter = ({userName}) => (
    <footer className="PageFooter App-footer">
        <span>A React Redux sample app</span>
    </footer>
)

AppFooter.propTypes = {
    userName: PropTypes.string
}

export default AppFooter
