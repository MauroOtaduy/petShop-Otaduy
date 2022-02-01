import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './PhotoSlider.css';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {

        imgPath:
            '../../assets/imgPhotoSlide/gato1.jpg',
    },
    {

        imgPath:
            '../../assets/imgPhotoSlide/perro1.jpg',
    },
    {

        imgPath:
            '../../assets/imgPhotoSlide/gato2.jpg',
    },
    {
        imgPath:
            '../../assets/imgPhotoSlide/perro3.jpg',
    },
];

function PhotoSlider() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div className='photoSlider'>
            <Box sx={{
                maxWidth: 1000, flexGrow: 1, justifycontent: 'center'
            }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography>{images[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 'auto',
                                        display: 'block',
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>

            </Box >
        </div>
    );
}

export default PhotoSlider;