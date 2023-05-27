import React from 'react';
import './home.css';
import { info } from '../info/info';
import { Box } from '@mui/material'


console.log(info.firstName);

const Home = () => {
    return (
        <>
            <Box
                sx={{
                    fontFamily: 'Roboto, sans-serif',
                    minHeight: '550px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        padding: '20px',
                        width: { xs: '90%', sm: '80%', md: '800px' },
                        margin: '40px auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div className="image">
                            <img src={info.selfPortrait} alt='profile' />
                        </div>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                        }}
                    >
                        <h1>
                            Hi <span className='wave-icon'>👋</span>, I'm {info.firstName}
                        </h1>
                        <h2>I'm a {info.position}</h2>
                        <div className="mini-bio">
                            {info.miniBio.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginBottom: '5px',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease-out',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                        },
                                    }}
                                >
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
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Home