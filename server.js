const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/chart-data', (req, res) => {
    const currentAmount = req.body.currentAmount;
    let finalAmount, increments;
    
    if (currentAmount === 100000) {
        finalAmount = 135000;
        increments = 10;
    } else if (currentAmount === 1000000) {
        finalAmount = 2430000;
        increments = 24;
    } else {
        return res.status(400).json({ error: 'Invalid amount' });
    }

    const labels = [];
    const values = [];
    const step = (finalAmount - currentAmount) / increments;

    for (let i = 0; i <= increments; i++) {
        labels.push(i.toString());
        values.push(currentAmount + step * i);
    }

    res.json({ labels, values, finalAmount });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
