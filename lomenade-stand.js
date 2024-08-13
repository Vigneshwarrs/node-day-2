const express = require('express');
const app = express();
const port = 5003;

//GET Menu is equal to get the already present data from DB
app.get('/menu',(req,res)=>{
    const newItem = req.query.new;
    res.send(`Menu:\n Small Lemonade, Medium Lemonade, Large Lemonade, ${newItem}`);
});

//POST order is equal to insering new data to DB
app.post('/order', (req,res)=> {
    const size = req.query.size; //"Medium Lemonade";
    res.send(`Thank you! Order received: ${size}`);
});

app.put('/order', (req,res)=> {
    const size = req.query.size;
    res.send(`Your order has been updated to ${size}`);
});

app.delete('/order', (req,res)=>{
    res.send(`Your order has been canceled!`);
})

app.listen(port, ()=>{
    console.log(`Server running on a port ${port}`);
})