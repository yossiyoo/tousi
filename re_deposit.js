
### 7. `re_deposit.js` の作成

```javascript name=re_deposit.js
document.addEventListener('DOMContentLoaded', () => {
    const reDepositForm = document.getElementById('re-deposit-form');
    const finalChartSection = document.getElementById('final-chart-section');

    reDepositForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const reDepositAmount = document.getElementById('re-deposit-amount').value;
        alert(`¥${reDepositAmount} が正常に再入金されました。`);
        reDepositForm.style.display = 'none';
        finalChartSection.style.display = 'block';
        displayFinalChart();
    });

    const generateUpwardTrendingData = (numPoints, startValue, endValue) => {
        let data = [];
        let step = (endValue - startValue) / (numPoints - 1);
        let value = startValue;

        for (let i = 0; i < numPoints; i++) {
            let randomChange = (Math.random() - 0.5) * 10000; // -5000から+5000のランダムな変動
            value += step + randomChange;
            data.push(value);
        }

        // 最後の値を正確にendValueに設定
        data[data.length - 1] = endValue;
        return data;
    };

    const displayFinalChart = () => {
        const ctx = document.getElementById('finalStockChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({length: 30}, (_, i) => `Day ${i + 1}`), // 30日分のラベル
                datasets: [{
                    label: '右肩上がりのランダム株価データ',
                    data: generateUpwardTrendingData(30, 1000000, 2430000), // 初期値1000000、最終値2430000
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
