import { Box, Link, Stack, Button } from '@mui/material';
import { flexCenter } from "../../themes/CommonStyles";
//icons
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';


const ProfileSettings = () => {
    return (
        <Box sx={flexCenter}>
            <Link href='#'>Become A Host</Link>
            <Stack>
                <Button>
                    <BsGlobe size={24} />
                </Button>
                <Button sx={{ borderRadius: 20, border: '1px solid #ddd' }}>
                    <Stack>
                        <AiOutlineMenu size={24} />
                        <FaRegUserCircle size={24} />
                    </Stack>
                </Button>
            </Stack>
        </Box>
    )
}

export default ProfileSettings;