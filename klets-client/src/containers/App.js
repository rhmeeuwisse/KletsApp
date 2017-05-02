import React from 'react'
import Page from '../components/Page'
import AppHeader from '../components/AppHeader'
import RoomsPane from '../components/RoomsPane'
import MessagesPane from '../components/MessagesPane'
import AppFooter from '../components/AppFooter'
import './Reset.css'
import '../components/Page.css'

class App extends React.Component {

    render() {
        return (
            <Page>
                <AppHeader />
                <RoomsPane />
                <MessagesPane />
                <AppFooter />
            </Page>
        )
    }
}

export default App