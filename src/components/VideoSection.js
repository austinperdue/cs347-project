import React from 'react';
import { Box, Typography } from '@mui/material';
import mountainVideo from '../images/mountains.mp4';

export default function VideoSection() {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                paddingTop: '56.25%', // 16:9 aspect ratio
                overflow: 'hidden',
            }}
        >
            <Box
                component="video"
                src={mountainVideo}
                title="Video"
                autoPlay
                muted
                loop
                playsInline
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h2"
                    color="white"
                    fontWeight="bold"
                    fontSize={{ xs: '2rem', md: '3.5rem', lg: '5rem' }}
                    letterSpacing=".3rem"
                    
                    sx={{

                        textShadow: '6px 6px 10px black',
                        fontFamily: 'Russo One, sans-serif',

                        
                    }}
                >
                    A RESORT FOR
                    <Typography
                        color="white"
                        fontWeight="bold"
                        fontSize={{ xs: '2rem', md: '3.5rem', lg: '5rem' }}
                        letterSpacing=".5rem"
                        sx={{
                            //textShadow: '6px 6px 10px black',
                            fontFamily: 'Russo One, sans-serif',
                            WebkitTextStroke: '0.2px white',
                            WebkitTextFillColor: 'transparent',

                            '&:hover': {
                                fontSize: { xs: '2.3rem', md: '5rem', lg: '6rem' },
                                transition: 'all 0.5s ease',
                            }
                        }}
                    >
                        EVERYONE
                    </Typography>
                    
                </Typography>
            </Box>
        </Box>
    );
}
