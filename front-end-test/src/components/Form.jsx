import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Grid } from '@material-ui/core';
import Input from './appComponents/Input';

function Form(props) {
  const { onSubmit, buttonText } = props;
  return (
    <section>
      <h3>Editar item</h3>
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>

            <Input name="id" label="_id" value="" />
            <Input name="productName" label="Product Name" value="" />
            <FormGroup row>
              <Input name="quantity" label="Quantity" value="" />
              <Input name="price" label="Price" value="" />
            </FormGroup>
            <Input name="clientName" label="Client Name" value="" />
            <Button type="button">
              {' '}
              {buttonText}
              {' '}
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Form;
