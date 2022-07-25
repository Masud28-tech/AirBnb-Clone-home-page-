import { Box, Paper, Stack, Typography, Divider, Button } from '@mui/material';
import { IoSearchCircleSharp } from 'react-icons/io5';
import { pink } from '@mui/material/colors';

const LocationSearch = () => {
    const choises = [
        { id: 1, text: 'Anywhere' },
        { id: 2, text: 'Any week' },
        { id: 3, text: 'Add guest', withIcon: true },
    ]

    return (
        <Paper
            sx={{ borderRadius: 20, ml: 15 }} 
            elevation={3}
        >
            <Stack
                sx={{ borderRadius: 20, pl: 2 }}
                divider={<Divider orientation='vertical' flexItem />}
            >
                {
                    choises.map(choise =>
                        <Button key={choise.id}>
                            <Typography sx={{ color: theme => theme.palette.text.primary, fontWeight: 'bold' }}>
                                {choise.text}
                            </Typography>
                            {
                                choise.withIcon &&
                                <Box sx={{ ml: 1, mr: 1, mt: 1 }}>
                                    <IoSearchCircleSharp color={pink[500]} size={32} />
                                </Box>
                            }
                        </Button>
                    )
                }
            </Stack>
        </Paper>
    );
}

export default LocationSearch