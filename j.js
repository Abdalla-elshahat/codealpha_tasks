document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    if (!isValidDate(day, month, year)) {
        document.getElementById('result').textContent = "Invalid date. Please enter a valid date.";
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `Your age is ${age} years.`;
});

function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}
