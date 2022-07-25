import { Box, Container } from '@mui/material';
import { dFlex, flexBetweenCenter, displayOnDesktop, displayOnMobile } from '../../themes/CommonStyles';

import Logo from './Logo';
import LocationSearch from './LocationSearch';
import ProfileSettings from './ProfileSettings';
import MobileSearch from './MobileSearch';


const Header = () => {
    return (
        <Box sx={{
            ...dFlex,
            minHeight: 70,
            borderBottom: '1px solid #ddd'
        }}
        >
            <Container maxWidth="xl">
                <Box sx={{
                    ...flexBetweenCenter,
                    minHeight: 90,
                    px: 4,
                }}
                >
                    <Box sx={displayOnDesktop}>
                        <Logo />
                    </Box>
                    <Box sx={displayOnDesktop}>
                        <LocationSearch />
                    </Box>
                    <Box sx={displayOnDesktop}>
                        <ProfileSettings />
                    </Box>
                    <Box sx={displayOnMobile}>
                        <MobileSearch />
                    </Box>

                </Box>

            </Container>
        </Box>
    );
}

export default Header;