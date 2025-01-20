document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const today = currentDate.getDate();

    // Update calendar header
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.querySelector('.calendar-right h2').textContent = months[currentMonth];
    document.querySelector('.calendar-left h1').textContent = currentMonth + 1;
    document.querySelector('.calendar-right h3').textContent = currentYear;

    // Generate calendar for the month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendarTable = document.querySelector('.calendar-table tbody');
    calendarTable.innerHTML = '';

    let row = document.createElement('tr');
    let cellCount = 0;

    for (let i = 0; i < firstDayOfMonth; i++) {
        row.appendChild(document.createElement('td'));
        cellCount++;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        if (cellCount === 7) {
            calendarTable.appendChild(row);
            row = document.createElement('tr');
            cellCount = 0;
        }

        const cell = document.createElement('td');
        const dateSpan = document.createElement('span');
        dateSpan.classList.add('date-number');
        dateSpan.textContent = day;

        // Highlight today's date
        if (day === today && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
            cell.classList.add('today-highlight');
        }

        const currentDateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const matchingMatches = matchDates.filter(match => match.date === currentDateStr);

        if (matchingMatches.length > 0) {
            const tourLogosContainer = document.createElement('div');
            tourLogosContainer.classList.add('tour-logos');

            matchingMatches.forEach(match => {
                const logoImage = document.createElement('img');
                logoImage.src = match.tour_logo;
                logoImage.alt = "Tour Logo";
                logoImage.classList.add('tour-logo');
                tourLogosContainer.appendChild(logoImage);
            });

            cell.appendChild(tourLogosContainer);
        }

        cell.appendChild(dateSpan);
        row.appendChild(cell);
        cellCount++;
    }

    if (cellCount > 0) {
        calendarTable.appendChild(row);
    }
});
