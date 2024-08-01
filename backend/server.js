const express = require('express');
const cors = require('cors'); 
const axios =require('axios');
const app = express();
const port = 3270;

app.use(cors());
app.use(express.json());


app.get('/products/category/jewelery',async (req, res) => {
    const resp = await axios.get("https://fakestoreapi.com/products/category/jewelery")
   res.json(resp.data);
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
