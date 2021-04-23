const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstname: 'Joe', lastname: 'doe'},
    {id: 2, firstname: 'Joert', lastname: 'doedf'},
    {id: 3, firstname: 'Joen', lastname: 'doessss'}
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));