import { Box, Stack, Typography } from '@mui/material';

export default function Footer () {
    return (
        <Stack position="fixed"
            sx={{
                bottom: 0,
                width: '100%',
                py: 3,
            }}
        >
            <Typography 
                sx={{
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    color: '#6D6D6D',
                    fontFamily: 'PlusJakartaSansBold',
                    letterSpacing: 2.4,
                    lineHeight: 1.3
                }} 
            >
                BUILT BY @ @ZIMA16B8F3
            </Typography>
        </Stack>
    );
}