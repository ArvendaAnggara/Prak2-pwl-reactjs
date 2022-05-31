import { Facebook, Instagram, LinkedIn, MenuBook, Pinterest, SettingsPowerRounded, Twitter } from '@material-ui/icons'
import React, { useState } from 'react'
import './styles/Main.scss'
import man from './assets/man.png'

const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>


                <div className="main__content">

                    <div className="text">
                            
                            <h1>Arvenda Anggara</h1>
                            <p>Informatic Enginering & Gamer</p>

                            <div className="icons">
                                <Twitter className='icon'/>
                                <Instagram className='icon'/>
                                <Facebook className='icon'/>
                                <LinkedIn className='icon'/>
                                <Pinterest className='icon'/>
                            </div>


                    <div className="buttons">
                        <button>See My Work</button>
                        <button>Hire Me</button>
                    </div>

                    </div>


                </div>


                <div className="main__img">
                    <img src={man} alt="" />
                </div>


            </div>



        </div>
    )
}


export default Main
