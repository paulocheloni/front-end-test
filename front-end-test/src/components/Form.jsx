import React, {
  useContext, useRef, useEffect, useState,
} from 'react';
import { Button, FormGroup, Grid } from '@material-ui/core';
import Input from './appComponents/Input';
import sharedContext from '../context/sharedcontext';
import cachedFetchData from '../utils/cachedFetchData';
import handleSubmit from '../events/handleSubmits';
import url from '../methods/url';

function Form() {
  const cache = useRef({});
  const {
    id, setEditing, editing, setUpdateTable,
  } = useContext(sharedContext);
  const [formData, setData] = useState({
    productName: '',
    clientName: '',
    quantity: '',
    price: '',
  });

  useEffect(() => {
    if (id !== '' && url.length !== 0) {
      cachedFetchData(cache, setData, id);
    }
  }, [url, id]);

  return (
    <section>
      <h3>{editing ? 'Editar Item' : 'Criar Item'}</h3>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>

            <FormGroup>
              <Input
                name="clientName"
                label="Client Name"
                value={formData.clientName}
                onChange={(e) => setData({ ...formData, clientName: e.target.value })}
              />
              <Input
                name="productName"
                label="Product Name"
                value={formData.productName}
                onChange={(e) => setData({ ...formData, productName: e.target.value })}
              />

            </FormGroup>
            <FormGroup row>
              <Input
                name="quantity"
                label="Quantity"
                value={formData.quantity}
                onChange={(e) => setData({ ...formData, quantity: e.target.value })}
              />
              <Input
                name="price"
                label="Price"
                value={formData.price}
                onChange={(e) => setData({ ...formData, price: e.target.value })}
              />
            </FormGroup>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={(e) => (
                handleSubmit(e, setEditing, setData, editing, formData, setUpdateTable))}
            >

              {editing ? 'Editar Item' : 'Criar Item'}
              {' '}
            </Button>
          </Grid>
        </Grid>
      </form>
    </section>
  );
}

export default Form;
