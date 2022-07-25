import { Fragment, useState } from 'react';
import { Box, Button, MobileStepper, Typography } from '@mui/material';
import { carouselDot, carouselImage, dFlex, fixedBottom, fixedIcon, flexBetween } from '../../themes/CommonStyles';
// 3rd party library for swipeable cards (images) and movements
import SwipeableViews from 'react-swipeable-views';
// icons
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { FaRegHeart } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

import './CarouselCard.styles.css';

const CarouselCard = ({ location }) => {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = location.locationImages.length;

    const handleBack = () => {
        setActiveStep((prevStep) => prevStep - 1);
    }
    const handleNext = () => {
        setActiveStep((prevStep) => prevStep + 1);
    }
    const handleStepChange = (step) => {
        setActiveStep(step);
    }

    return (
        <Box
            className='carouselCard'
            sx={{
                flexGrow: 1,
                position: 'relative'
            }}
        >
            <Box sx={fixedIcon}>
                <FaRegHeart size={24} color='#fff' />
            </Box>

            {
                location.locationImages.length && (
                    <SwipeableViews
                        axis={'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {
                            location.locationImages.map((image, index) => {
                                return (
                                    <div key={image.id}>
                                        <Box
                                            component='img'
                                            src={image.url}
                                            alt={image.id}
                                            sx={carouselImage}
                                        ></Box>
                                    </div>
                                )
                            })
                        }
                    </SwipeableViews>
                )
            }

            <Box sx={fixedBottom} >
                <MobileStepper
                    sx={{ backgroundColor: 'transparent' }}
                    steps={maxSteps}
                    position='static'
                    activeStep={activeStep}
                    nextButton={
                        <Button size='small' sx={carouselDot} onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button size='small' sx={carouselDot} onClick={handleBack} disabled={activeStep === 0}>
                            <KeyboardArrowLeft />
                        </Button>
                    }
                />
            </Box>

            <Box sx={flexBetween}>
                <Box sx={{ mt: 2 }}>
                    <Typography component='h3'>{location.location}</Typography>
                    <Typography component='h4'>{location.days}</Typography>
                    <Typography component='h5'>{location.price}</Typography>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Box sx={dFlex}>
                        {location.isNew ? (
                            <Fragment>
                                <Typography component='h3'>New</Typography>
                                <AiFillStar size={18} />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Typography component='h3'>{location.rating}</Typography>
                                <AiFillStar size={18} />
                            </Fragment>
                        )}
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default CarouselCard