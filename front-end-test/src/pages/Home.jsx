import React from 'react';
import Form from '../components/Form';
import Table from '../components/Table';

function Home() {
  return (
    <div className="pageContainer">
      <h2 className="title">ABM STOCK </h2>
      <Table />
      <Form />
    </div>
  );
}

export default Home;
