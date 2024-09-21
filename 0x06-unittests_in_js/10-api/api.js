const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(404).send('Product id should be a number');
    } else {
        res.send(`Payment methods for cart ${id}`);
    }
});

app.get('/available_payments', (req, res) => {
    res.send({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

app.use(express.json());
app.post('/login', (req, res) => {
    res.send(`Welcome ${req.body.userName}`);
});

app.listen(port);

console.log(`API available on localhost port ${port}`);
module.exports = app;