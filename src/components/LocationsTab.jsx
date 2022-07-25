import React, { useState } from 'react';
import { Container, Box, Tabs, Tab, tabsClasses, Button } from '@mui/material';
import {displayOnDesktop} from '../themes/CommonStyles';
import {FaFilter} from 'react-icons/fa'
import { locationsTab } from '../data/mock-data';



const LocationsTab = () => {
    const [value, setValue] = useState(0);
    const changeHandler = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth='xl'>
            <Box sx={{
                display: 'flex',
                flexGrow: 1,
                alignItems: 'center',
                px: { xs: 0, md: 2 },
                mt: 2, mb: 2
            }}>

                <Tabs
                    value={value}
                    onChange={changeHandler}
                    variant='scrollable'
                    scrollButtons
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: { '&.Mui-disabled': { opacity: 0.3 } }
                    }}
                >
                    {
                        locationsTab.map(tab => {
                            return <Tab key={tab.id} label={tab.label} icon={tab.icon} />;
                        })
                    }
                </Tabs>
                <Button sx={{
                    display:{xs:'none', md:'block'},
                    justifyContent:'space-between',
                    minWidth:90,
                    py:1,
                    border: '1px solid #ddd',
                    borderRadius:2,
                    textTransform:'capitalize',
                    color: 'theme.palette.text.primary'

                }}
                >
                    <FaFilter/> Filters
                </Button>
            </Box>
        </Container>
    );
}

export default LocationsTab