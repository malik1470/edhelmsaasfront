document.addEventListener('DOMContentLoaded', function() {
  // Initialize Student Enrollment Chart
  new Chart(document.getElementById('enrollmentChart'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'New Enrollments',
        data: [65, 78, 90, 85, 92, 88],
        borderColor: '#3498db',
        tension: 0.3,
        fill: false
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Student Enrollment Trend'
        }
      }
    }
  });

  // Initialize Attendance Chart
  new Chart(document.getElementById('attendanceChart'), {
    type: 'bar',
    data: {
      labels: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
      datasets: [{
        label: 'Present',
        data: [92, 88, 95, 89, 91],
        backgroundColor: '#2ecc71'
      }, {
        label: 'Absent',
        data: [8, 12, 5, 11, 9],
        backgroundColor: '#e74c3c'
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
          max: 100
        }
      }
    }
  });

  // Initialize School Events Calendar
  const eventsCalendar = new FullCalendar.Calendar(document.getElementById('eventsCalendar'), {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    },
    events: [
      {
        title: 'Parent Meeting',
        start: '2024-05-25',
        color: '#3498db'
      },
      {
        title: 'Sports Day',
        start: '2024-05-30',
        color: '#2ecc71'
      }
    ]
  });
  eventsCalendar.render();

  // Initialize Exam Calendar
  const examCalendar = new FullCalendar.Calendar(document.getElementById('examCalendar'), {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'
    },
    events: [
      {
        title: 'Math Exam',
        start: '2024-06-10',
        color: '#e74c3c'
      },
      {
        title: 'Science Exam',
        start: '2024-06-12',
        color: '#e74c3c'
      }
    ]
  });
  examCalendar.render();

  // Populate Recent Activities Table
  const activities = [
    { date: '2024-05-20', activity: 'New student enrollment', status: 'Completed' },
    { date: '2024-05-19', activity: 'Fee collection', status: 'Pending' },
    { date: '2024-05-18', activity: 'Teacher meeting', status: 'Completed' }
  ];

  const activitiesTable = document.getElementById('activitiesTable');
  activities.forEach(activity => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${activity.date}</td>
      <td>${activity.activity}</td>
      <td><span class="badge ${activity.status === 'Completed' ? 'bg-success' : 'bg-warning'}">${activity.status}</span></td>
    `;
    activitiesTable.appendChild(row);
  });
}); 