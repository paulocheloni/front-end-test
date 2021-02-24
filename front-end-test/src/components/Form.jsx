import React, {
  useContext, useRef, useEffect, useState,
} from 'react';
import {
  Button, Grid, FormGroup, Checkbox, FormControlLabel,
} from '@material-ui/core';
import Input from './appComponents/Input';
import sharedContext from '../context/sharedcontext';
import cachedFetchData from '../utils/cachedFetchData';
import handleSubmit from '../events/handleFormSubmits';
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
    active: false,
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
        <Grid container spacing={2}>
          {editing && (
            <Grid item xs={12}>
              <Input
                name="id"
                label="_id"
                value={formData.id}
                onChange={(e) => setData({ ...formData, id: e.target.value })}
                className="input"
                fullWidth
              />
            </Grid>
          )}
          <Grid item xs={12}>
            <Input
              name="clientName"
              label="Client Name"
              value={formData.clientName}
              onChange={(e) => setData({ ...formData, clientName: e.target.value })}
              className="input"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              name="productName"
              label="Product Name"
              value={formData.productName}
              onChange={(e) => setData({ ...formData, productName: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>

                <Input
                  name="quantity"
                  label="Quantity"
                  value={formData.quantity}
                  onChange={(e) => setData({ ...formData, quantity: e.target.value })}
                />
              </Grid>
              <Grid item>

                <Input
                  name="price"
                  label="Price"
                  value={formData.price}
                  onChange={(e) => setData({ ...formData, price: e.target.value })}
                />
              </Grid>

              <Grid item>

                <FormControlLabel
                  name="active"
                  label="Active"
                  control={<Checkbox />}
                  checked={formData.active}
                  onChange={(e) => setData({ ...formData, active: e.target.checked })}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className="button">

          <FormGroup>

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
          </FormGroup>
        </div>
      </form>
    </section>
  );
}

export default Form;
