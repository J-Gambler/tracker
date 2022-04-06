import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import {
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Nft1Image from '../../assets/images/nfts/1.png';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function NftCard() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ flex: 1, borderRadius: 4, position: 'relative' }}>
        <CardMedia
          component="img"
          height="250"
          image={Nft1Image}
          alt="Paella dish"
        />
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 12
          }}
        >
          <Chip
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            disableelevation="true"
            clickable
            onClick={handleClick}
            label={<MoreHorizIcon sx={{ color: 'background.paper' }} />}
            sx={{
              bgcolor: 'transparent'
            }}
          />
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ 
              p: 0,
              '& .MuiMenuItem-root': {
                py: 0,
                '& span': {
                  color: '#18181B'
                }
              }
            }}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <Typography variant="overline">View on Etherscan</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <Typography variant="overline">View on OpenSea</Typography>
            </MenuItem>
          </StyledMenu>
        </Box>
        <CardContent 
          sx={{ 
            px: 3, 
            py: 2.5, 
            pb: 8,
            textAlign: 'left' 
          }}
        >
            <Stack flexDirection="row" justifyContent="space-between">
                <Typography variant="caption">Unbothered Penguin #2145</Typography>
                <Chip label="Mint" />
            </Stack>
            <Typography>Penguins UItd. #1</Typography>
            <Stack
              sx={{
                gap: 2,
                pt: 3,
                '& p': {
                  textTransform: 'uppercase',
                  fontSize: 16
                }
              }}
            >
              <Stack>
                <Typography variant="overline">Date</Typography>
                <Typography>2021-11-26 02:02:02</Typography>
              </Stack>
              <Stack flexDirection="row" justifyContent="space-between" alignItems="flex-end">
                <Stack>
                  <Typography variant="overline">From</Typography>
                  <Typography>0x343adb...e0c1</Typography>
                </Stack>
                <ArrowCircleRightOutlinedIcon />
                <Stack 
                  sx={{ 
                    '& p, span': {
                      textAlign: 'right !important'
                    }
                  }}
                >
                  <Typography variant="overline">To</Typography>
                  <Typography sx={{ textTransform: 'lowercase' }}>1eb0fx54...0xe7</Typography>
                </Stack>
              </Stack>
              <Stack flexDirection="row" justifyContent="space-between">
                <Stack>
                  <Typography variant="overline">Mint Price</Typography>
                  <Typography>0.25Eth</Typography>
                </Stack>
                <Stack
                  sx={{ 
                    '& p, span': {
                      textAlign: 'right !important'
                    }
                  }}
                >
                  <Typography variant="overline">Gas Price</Typography>
                  <Typography>0.02345345Eth</Typography>
                </Stack>
              </Stack>
              <Stack flexDirection="row" justifyContent="space-between">
                <Stack>
                  <Typography variant="overline">Royalities</Typography>
                  <Typography>-</Typography>
                </Stack>  
                <Stack
                  sx={{ 
                    '& p, span': {
                      textAlign: 'right !important'
                    }
                  }}
                >
                  <Typography variant="overline">Platform Fees</Typography>
                  <Typography>-</Typography>
                </Stack>
              </Stack>
            </Stack>
        </CardContent>
        <Divider />
        <Stack 
          flexDirection="row" 
          justifyContent="space-between"
          sx={{
            px: 3,
            py: 2
          }}
        >
          <Typography variant="button">Total Cost</Typography>
          <Typography variant="button">0.273432ETH</Typography>
        </Stack>
    </Card>
  );
}
