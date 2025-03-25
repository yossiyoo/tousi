document.addEventListener('DOMContentLoaded', function () {
    let chartData = [100000, 135000];
    let chartLabels = ['Start', 'End'];
    let currentStep = 0;

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: '金額',
                data: chartData,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.getElementById('nextBtn').addEventListener('click', function () {
        if (currentStep === 0) {
            chartData = [135000, 100000];
            chartLabels = ['End', '出金後'];
            currentStep++;
        } else if (currentStep === 1) {
            chartData = [1000000, 2430000];
            chartLabels = ['Start', 'End'];
            currentStep++;
        } else {
            chartData = [2430000];
            chartLabels = ['End'];
            currentStep = 0;
        }

        myChart.data.labels = chartLabels;
        myChart.data.datasets[0].data = chartData;
        myChart.update();
    });
});
