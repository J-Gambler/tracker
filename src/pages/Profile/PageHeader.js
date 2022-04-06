import * as React from 'react';
import { Typography, Link, Breadcrumbs } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

export default function PageHeader() {
  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs 
        separator={<ArrowForwardIosOutlinedIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          sx={{ fontSize: 30, fontFamily: 'PlusJakartaSansBold' }}
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Profiles
        </Link>
        <Typography 
          sx={{ fontSize: 30, fontFamily: 'PlusJakartaSansBold' }}
          color="text.primary">Zima</Typography>
      </Breadcrumbs>
    </div>
  );
}
