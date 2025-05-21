document.addEventListener("DOMContentLoaded", function () {
  // Fees Collection - Bar Chart
  new Chart(document.getElementById('barChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['May 1', 'May 5', 'May 10', 'May 15', 'May 20'],
      datasets: [{
        label: 'Fees Collected',
        data: [500, 700, 400, 800, 1000],
        backgroundColor: 'rgba(13, 110, 253, 0.6)'
      }]
    },
    options: { responsive: true }
  });

  // Class-wise Fees Collection
  new Chart(document.getElementById('classFeeChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
      datasets: [{
        label: 'Collected ($)',
        data: [1200, 1500, 900, 1300, 1100],
        backgroundColor: 'rgba(25, 135, 84, 0.6)'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: false }
      }
    }
  });

  // Doughnut Chart - Income vs Expense
  new Chart(document.getElementById('doughnutChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Income', 'Expense'],
      datasets: [{
        data: [8305, 1150],
        backgroundColor: ['#198754', '#dc3545']
      }]
    },
    options: { responsive: true }
  });

  // Calendar 1 - Weekly Schedule
  const calendar1 = new FullCalendar.Calendar(document.getElementById('calendar1'), {
    initialView: 'timeGridWeek',
    height: 400,
    events: [
      { title: 'Vacation', start: '2025-05-19', end: '2025-05-21', color: 'green' },
      { title: 'Online Course Test', start: '2025-05-21T10:30:00', end: '2025-05-21T12:00:00', color: 'red' }
    ]
  });
  calendar1.render();

  // Calendar 2 - Exam Schedule
  const calendar2 = new FullCalendar.Calendar(document.getElementById('calendar2'), {
    initialView: 'dayGridWeek',
    height: 400,
    events: [
      { title: 'Exam - Math', start: '2025-05-22' },
      { title: 'Exam - Science', start: '2025-05-23' },
      { title: 'Exam - English', start: '2025-05-24' }
    ]
  });
  calendar2.render();
});