import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { locations as locationCards } from '../data/mock-data';
import CarouselCard from './carouselCard/CarouselCard';

const LocationsCards = () => {
    const [cards, setCards] = useState(locationCards);

    return (

        cards && <Box sx={{ mx: 2 }}>
            <Grid container rowSpacing={3} columnSpacing={3}>
                {
                    cards.map(location => {
                        return (
                            <Grid item key={location.id} xs={12} sm={6} md={4} lg={3}>
                                <CarouselCard location={location}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>


    )
}

export default LocationsCards;