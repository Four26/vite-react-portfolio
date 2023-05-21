import React from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function PortfolioBlock(props) {
    const { image, live, source, title } = props;

    return (
        <Box justifyContent={'center'} alignItems={'center'} gap={2}>
            <Box
                component={'div'}
                style={{
                    width: '80%',
                    height: '0',
                    paddingTop: '37%',
                    position: 'relative',
                    overflow: 'hidden',
                    margin: '1rem',
                    border: '1px solid black',
                    borderRadius: '5px',
                }}
            >
                <img
                    src={image}
                    alt={'mockup'}
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </Box>
            <h1 style={{ fontSize: '2rem', textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>{title}</h1>
            <Box
                className={'portfolio'}
                display={'flex'}
                flexDirection={'column'}
                gap={'0.5rem'}
                alignItems={'center'}
                fontSize={'1.5rem'}
                py={'2rem'}
            >
                <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                    <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} />
                </Box>
                <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
                    <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
                </Box>
            </Box>
        </Box>
    );
}

export default PortfolioBlock;
