
### 3. `chart.js` の作成

```javascript name=chart.js
document.addEventListener('DOMContentLoaded', () => {
    const depositForm = document.getElementById('deposit-form');
    const chartSection = document.getElementById('chart-section');
    const nextButton = document.getElementById('next-button');

    depositForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const depositAmount = document.getElementById('deposit-amount').value;
        alert(`¥${depositAmount} が正常に入金されました。`);
        depositForm.style.display = 'none';
        chartSection.style.display = 'block';
        displayChart(100000, 135000);
    });

    nextButton.addEventListener('click', () => {
        window.location.href = 'withdraw.html';
    });

    const generateUpwardTrendingData = (numPoints, startValue, endValue) => {
        let data = [];
        let step = (endValue - startValue) / (numPoints - 1);
        let value = startValue;

        for (let i = 0; i < numPoints; i++) {
            let randomChange = (Math.random() - 0.5) * 1000; // -500から+500のランダムな変動
            value += step + randomChange;
            data.push(value);
        }

        // 最後の値を正確にendValueに設定
        data[data.length - 1] = endValue;
        return data;
    };

    const displayChart = (startValue, endValue) => {
        const ctx = document.getElementById('stockChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({length: 30}, (_, i) => `Day ${i + 1}`), // 30日分のラベル
                datasets: [{
                    label: '右肩上がりのランダム株価データ',
                    data: generateUpwardTrendingData(30, startValue, endValue),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: false,
                    tension: 0.1
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: '日付'
                        }
                    },
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: '株価'
                        }
                    }
                }
            }
        });
    };
});
