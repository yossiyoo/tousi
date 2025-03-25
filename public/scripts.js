document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('investmentChart').getContext('2d');
    let chart;
    let currentAmount = 100000;

    function fetchData() {
        return fetch('/api/chart-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ currentAmount })
        }).then(response => response.json());
    }

    function updateChart(data) {
        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: 'Investment Value',
                    data: data.values,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        currentAmount = data.finalAmount;
    }

    document.getElementById('next').addEventListener('click', function () {
        fetchData().then(data => {
            updateChart(data);
        });
    });

    fetchData().then(data => {
        updateChart(data);
    });
});
