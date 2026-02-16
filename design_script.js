// Get current month (1-12)
const month = new Date().getMonth() + 1;

// Set body background color based on month
if (month >= 1 && month <= 3) {
    document.body.style.backgroundColor = 'red';
} else if (month >= 4 && month <= 6) {
    document.body.style.backgroundColor = 'blue';
} else if (month >= 7 && month <= 9) {
    document.body.style.backgroundColor = 'green';
} else if (month >= 10 && month <= 12) {
    document.body.style.backgroundColor = 'purple';
}
