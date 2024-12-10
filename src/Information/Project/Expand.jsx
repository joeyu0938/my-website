import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMoreButton = ({ id, expanded, onExpandClick }) => {
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    transform: !expanded ? 'rotate(0deg)' : 'rotate(180deg)',
  }));

  

  return (
    <ExpandMore
      expand={expanded}
      onClick={() => onExpandClick(id)}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </ExpandMore>
  );
};

export default ExpandMoreButton;