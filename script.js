const ctx = document.getElementById('investmentChart').getContext('2d');

const generateRandomData = (start, end) => {
    const data = [];
    let value = start;
    for (let i = 0; i < 10; i++) {
        value += Math.random() * (end - value) / 10;
        data.push(value);
    }
    return data;
};

const data = generateRandomData(100000, 135000);

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({ length: 10 }, (_, i) => i + 1),
        datasets: [{
            label: '投資価値',
            data: data,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
        }],
    },
    options: {
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: '時間'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: '価値'
                }
            }
        }
    }
});
