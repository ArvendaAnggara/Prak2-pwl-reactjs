import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Education, Contacts, Services } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio ReactJs</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Services />
            <Footer />
        </div>
    )
}

export default Main
