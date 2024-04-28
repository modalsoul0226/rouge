import React from 'react'
import PropTypes from 'prop-types'

import Bleed from './layouts/bleed'
import Header from './layouts/header'

import './layout.scss'

const Layout = (props) => {
    return (
        <Bleed>
            <Header/>
            <main>{props.children}</main>
        </Bleed>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
