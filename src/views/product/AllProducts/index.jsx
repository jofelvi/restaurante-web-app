import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core';

// Organisms
import { ProductList, CategoryFilter } from '../../../components/Organisms';

const styles = makeStyles({
  root: {
    display: 'flex'
  }
});

const AllProducts = () => {
  const classes = styles();
  const data = [
    {
      label: 'Happy Hour',
      quantity: 3
    },
    {
      label: 'Bebidas',
      quantity: 8
    },
    {
      label: 'Sopas',
      quantity: 5
    }
  ];

  return (
    <section className={classes.root}>
      <CategoryFilter data={data} />
      <ProductList />
    </section>
  );
};

export default AllProducts;
