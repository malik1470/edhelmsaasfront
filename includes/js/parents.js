document.addEventListener('DOMContentLoaded', function() {
    // Performance Chart - Ali Raza
    new Chart(document.getElementById('performanceChart1'), {
      type: 'bar',
      data: {
        labels: ['Math', 'English', 'Science', 'Urdu', 'Computer'],
        datasets: [{
          label: 'Marks (%)',
          data: [85, 90, 78, 88, 82],
          backgroundColor: 'rgba(52, 152, 219, 0.8)',
          borderColor: 'rgba(52, 152, 219, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Subject-wise Performance'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  
    // Performance Chart - Alina Raza
    new Chart(document.getElementById('performanceChart2'), {
      type: 'bar',
      data: {
        labels: ['Math', 'English', 'Science', 'Urdu', 'Computer'],
        datasets: [{
          label: 'Marks (%)',
          data: [92, 88, 84, 90, 89],
          backgroundColor: 'rgba(46, 204, 113, 0.8)',
          borderColor: 'rgba(46, 204, 113, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Subject-wise Performance'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  
    // Attendance Chart - Ali Raza
    new Chart(document.getElementById('attendanceChart1'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Attendance %',
          data: [94, 91, 89, 90, 92],
          borderColor: 'rgba(52, 152, 219, 1)',
          backgroundColor: 'rgba(52, 152, 219, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Attendance Trend'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  
    // Attendance Chart - Alina Raza
    new Chart(document.getElementById('attendanceChart2'), {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Attendance %',
          data: [98, 97, 96, 95, 97],
          borderColor: 'rgba(46, 204, 113, 1)',
          backgroundColor: 'rgba(46, 204, 113, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Attendance Trend'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  
    // Class Timetable Calendar
    const calendar1 = new FullCalendar.Calendar(document.getElementById('calendar1'), {
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
      },
      events: [
        {
          title: 'Math',
          daysOfWeek: [1, 3, 5],
          startTime: '09:00:00',
          endTime: '10:00:00',
          color: '#3498db'
        },
        {
          title: 'English',
          daysOfWeek: [1, 3, 5],
          startTime: '10:00:00',
          endTime: '11:00:00',
          color: '#2ecc71'
        },
        {
          title: 'Science',
          daysOfWeek: [2, 4],
          startTime: '09:00:00',
          endTime: '11:00:00',
          color: '#e74c3c'
        }
      ],
      height: 400
    });
    calendar1.render();
  
    // Exam Schedule Calendar
    const calendar2 = new FullCalendar.Calendar(document.getElementById('calendar2'), {
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
          color: '#3498db'
        },
        {
          title: 'English Exam',
          start: '2024-06-12',
          color: '#2ecc71'
        },
        {
          title: 'Science Exam',
          start: '2024-06-14',
          color: '#e74c3c'
        }
      ],
      height: 400
    });
    calendar2.render();
  
    // Add hover effect to header icons
    const headerIcons = document.querySelectorAll('.header-icons i');
    headerIcons.forEach(icon => {
      icon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
      });
      icon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
      });
    });
  });