import { Paper, InputBase, IconButton } from '@mui/material';
// icons
import { FaSearch } from 'react-icons/fa'
import { VscSettings } from 'react-icons/vsc'

const MobileSearch = () => {
    return (
        <Paper
            component='form'
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
                border: '1px solid #ccc',
                borderRadius: 20
            }}>
            <IconButton sx={{ p: '10px' }}>
                <FaSearch />
            </IconButton>

            <InputBase
                placeholder='Where to?'
                sx={{ ml: 1, flex: 1 }}
            />
            
            <IconButton type='submit' sx={{ p: '10px' }}>
                <VscSettings />
            </IconButton>
        </Paper>
    )
}

export default MobileSearch;