import React from 'react';
import './home.css';
import { info } from '../info/info';
import {Box} from '@mui/material'


console.log(info.firstName);

const Home = () => {
    return (
        <>
            <div className='main-homecontainer'>
                <div className="home-container">
                    <div className="image">
                        <img src={info.selfPortrait} alt='profile' />
                    </div>
                    <div className="info">
                        <h1>Hi <span className='wave-icon'>👋</span>, I'm {info.firstName}</h1>
                        <h2>I'm a {info.position}</h2>
                        <div className="mini-bio">
                            {info.miniBio.map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    <span style={{ fontSize: '1.5rem' }}>{item.emoji}</span>
                                    <span style={{ marginLeft: '10px' }}>{item.text}</span>
                                </Box>
                            ))}
                        </div>
                        <div className="socials">
                            {info.socials.map((item, index) => (
                                <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                                    <i className={item.icon} aria-hidden="true"></i>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home