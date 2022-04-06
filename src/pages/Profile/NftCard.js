import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardMedia,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Nft1Image from '../../assets/images/nfts/1.png';

export default function NftCard() {
  return (
    <Card sx={{ flex: 1, borderRadius: 4 }}>
        <CardMedia
            component="img"
            height="250"
            image={Nft1Image}
            alt="Paella dish"
        />
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
