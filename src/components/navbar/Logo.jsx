import { Box, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { FaAirbnb } from 'react-icons/fa';
import { flexCenter } from '../../themes/CommonStyles';

const Logo = () => {
    return (
        <Box sx={flexCenter}>
            <FaAirbnb size={40} color={pink[500]} />
            <Typography sx={{
                ml: 1,
                fontSize: '20px',
                fontWeight: 'bold',
                color: theme => theme.palette.secondary.main
            }} component='h3'
            >
                AirBnB
            </Typography>
        </Box>
    )
}

export default Logo;