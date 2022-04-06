import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Breadcrumbs } from '@mui/material';
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
          style={{ textDecoration: 'none' }}
          to="/main/profiles/"
        >
          <Typography variant="h3" component="span">Profiles</Typography>
        </Link>
        <Typography variant="h2">Zima</Typography>
      </Breadcrumbs>
    </div>
  );
}
