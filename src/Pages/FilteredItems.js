import { ArrowBack, AttachMoney } from '@mui/icons-material';
import { Box, Button, Grid, Paper, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FilteredItems = ({ filteredItems }) => {
  const navigate = useNavigate();
  return (
    <Grid
      sx={{
        mt: '7rem',
        position: 'relative',
      }}
      container
      spacing={3}
    >
      <Box
        component={motion.div}
        whileHover={{
          color: '#6f8d77',
        }}
      >
        <ArrowBack
          sx={{
            position: 'absolute',
            top: '-2.5rem',
            left: '1rem',
            fontSize: '3rem',
            '&:hover': {
              transform: 'scale(1.2)',
              transition: 'all 0.2s ease-in-out',
            },
          }}
          onClick={() => navigate('/categories')}
        />
      </Box>
      {filteredItems.map((item) => (
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            sx={{
              px: '.5rem',
              py: '1rem',
              display: 'flex',
              flexDirection: 'column',
              height: '45vh',
              justifyContent: 'space-evenly',
            }}
            component={motion.div}
            whileHover={{
              scale: 1.05,
              backgroundColor: '#6f8d77',
              transition: {
                duration: 0.2,
                type: 'spring',
                stiffness: 80,
              },
            }}
          >
            <motion.img
              src={item.thumbnail}
              alt={item.title}
              style={{
                width: '100%',
                height: '18vh',
                objectFit: 'cover',
                objectPosition: 'scale-down',
                borderRadius: '5px',
                filter: 'brightness(70%)',
              }}
              whileHover={{
                filter: 'brightness(100%)',
                transition: {
                  duration: 0.2,
                },
              }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <h3
                style={{
                  color: '#fff',
                }}
              >
                {item.title.length > 20
                  ? item.title.slice(0, 20) + '...'
                  : item.title}
              </h3>

              <p
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {' '}
                <AttachMoney /> {item.price}
              </p>
            </Box>
            <Rating
              sx={{
                alignSelf: 'center',
              }}
              readOnly
              value={item.rating}
            />
            <Button variant="contained">Add to Cart</Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default FilteredItems;
