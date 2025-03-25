
### 5. `withdraw.js` の作成

```javascript name=withdraw.js
document.addEventListener('DOMContentLoaded', () => {
    const withdrawForm = document.getElementById('withdraw-form');

    withdrawForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const withdrawAmount = document.getElementById('withdraw-amount').value;
        alert(`¥${withdrawAmount} が正常に出金されました。`);
        window.location.href = 're_deposit.html';
    });
});
