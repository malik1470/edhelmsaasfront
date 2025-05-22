document.addEventListener('DOMContentLoaded', function() {
  // Tab Switching Functionality
  const menuItems = document.querySelectorAll('.menu-item');
  const tabContents = document.querySelectorAll('.tab-content');
  const pageTitle = document.getElementById('page-title');

  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all menu items and tab contents
      menuItems.forEach(item => item.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked menu item and corresponding tab content
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
      
      // Update page title
      pageTitle.textContent = this.querySelector('span').textContent;
    });
  });

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

  // Attendance Overview Charts
  new Chart(document.getElementById('attendanceOverviewChart1'), {
    type: 'doughnut',
    data: {
      labels: ['Present', 'Absent', 'Leave'],
      datasets: [{
        data: [92, 5, 3],
        backgroundColor: ['#2ecc71', '#e74c3c', '#f1c40f']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Ali Raza - Attendance Distribution'
        }
      }
    }
  });

  new Chart(document.getElementById('attendanceOverviewChart2'), {
    type: 'doughnut',
    data: {
      labels: ['Present', 'Absent', 'Leave'],
      datasets: [{
        data: [97, 2, 1],
        backgroundColor: ['#2ecc71', '#e74c3c', '#f1c40f']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Alina Raza - Attendance Distribution'
        }
      }
    }
  });

  // Exam Calendar with more detailed events
  const examCalendar = new FullCalendar.Calendar(document.getElementById('examCalendar'), {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listWeek'
    },
    events: [
      {
        title: 'Mathematics Final Exam',
        start: '2024-06-10T09:00:00',
        end: '2024-06-10T11:00:00',
        color: '#3498db',
        extendedProps: {
          room: '101',
          teacher: 'Mr. Ahmed',
          type: 'Final Exam'
        }
      },
      {
        title: 'English Final Exam',
        start: '2024-06-12T09:00:00',
        end: '2024-06-12T11:00:00',
        color: '#2ecc71',
        extendedProps: {
          room: '102',
          teacher: 'Ms. Sarah',
          type: 'Final Exam'
        }
      },
      {
        title: 'Science Final Exam',
        start: '2024-06-14T09:00:00',
        end: '2024-06-14T11:00:00',
        color: '#e74c3c',
        extendedProps: {
          room: '103',
          teacher: 'Mr. Ali',
          type: 'Final Exam'
        }
      },
      {
        title: 'Urdu Final Exam',
        start: '2024-06-16T09:00:00',
        end: '2024-06-16T11:00:00',
        color: '#f1c40f',
        extendedProps: {
          room: '104',
          teacher: 'Ms. Fatima',
          type: 'Final Exam'
        }
      },
      {
        title: 'Computer Final Exam',
        start: '2024-06-18T09:00:00',
        end: '2024-06-18T11:00:00',
        color: '#9b59b6',
        extendedProps: {
          room: '105',
          teacher: 'Mr. Hassan',
          type: 'Final Exam'
        }
      }
    ],
    eventDidMount: function(info) {
      info.el.setAttribute('data-bs-toggle', 'tooltip');
      info.el.setAttribute('data-bs-title', `
        Room: ${info.event.extendedProps.room}
        Teacher: ${info.event.extendedProps.teacher}
        Type: ${info.event.extendedProps.type}
      `);
    },
    height: 650
  });
  examCalendar.render();

  // Initialize tooltips for exam events
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Timetable Calendar with more detailed events
  const timetableCalendar = new FullCalendar.Calendar(document.getElementById('timetableCalendar'), {
    initialView: 'timeGridWeek',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    slotMinTime: '08:00:00',
    slotMaxTime: '16:00:00',
    events: [
      {
        title: 'Mathematics',
        daysOfWeek: [1, 3, 5],
        startTime: '09:00:00',
        endTime: '10:00:00',
        color: '#3498db',
        extendedProps: {
          room: '101',
          teacher: 'Mr. Ahmed'
        }
      },
      {
        title: 'English',
        daysOfWeek: [1, 3, 5],
        startTime: '10:00:00',
        endTime: '11:00:00',
        color: '#2ecc71',
        extendedProps: {
          room: '102',
          teacher: 'Ms. Sarah'
        }
      },
      {
        title: 'Science',
        daysOfWeek: [2, 4],
        startTime: '09:00:00',
        endTime: '11:00:00',
        color: '#e74c3c',
        extendedProps: {
          room: '103',
          teacher: 'Mr. Ali'
        }
      },
      {
        title: 'Urdu',
        daysOfWeek: [2, 4],
        startTime: '11:00:00',
        endTime: '12:00:00',
        color: '#f1c40f',
        extendedProps: {
          room: '104',
          teacher: 'Ms. Fatima'
        }
      },
      {
        title: 'Computer',
        daysOfWeek: [1, 3],
        startTime: '11:00:00',
        endTime: '12:00:00',
        color: '#9b59b6',
        extendedProps: {
          room: '105',
          teacher: 'Mr. Hassan'
        }
      },
      {
        title: 'Physical Education',
        daysOfWeek: [2, 5],
        startTime: '12:00:00',
        endTime: '13:00:00',
        color: '#e67e22',
        extendedProps: {
          room: 'Ground',
          teacher: 'Mr. Usman'
        }
      }
    ],
    eventDidMount: function(info) {
      info.el.setAttribute('data-bs-toggle', 'tooltip');
      info.el.setAttribute('data-bs-title', `
        Room: ${info.event.extendedProps.room}
        Teacher: ${info.event.extendedProps.teacher}
      `);
    },
    height: 700
  });
  timetableCalendar.render();

  // Update Today's Classes
  function updateTodayClasses() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinutes;

    document.querySelectorAll('.class-item').forEach(item => {
      const timeText = item.querySelector('.class-time').textContent;
      const [startTime] = timeText.split(' - ');
      const [startHour, startMinute] = startTime.split(':').map(Number);
      const classTime = startHour * 60 + startMinute;

      const statusElement = item.querySelector('.class-status');
      if (currentTime >= classTime && currentTime < classTime + 60) {
        statusElement.className = 'class-status ongoing';
        statusElement.querySelector('span').textContent = 'Ongoing';
      } else if (currentTime < classTime) {
        statusElement.className = 'class-status upcoming';
        statusElement.querySelector('span').textContent = 'Upcoming';
      } else {
        statusElement.className = 'class-status';
        statusElement.querySelector('span').textContent = 'Completed';
      }
    });
  }

  // Update class status every minute
  updateTodayClasses();
  setInterval(updateTodayClasses, 60000);

  // Previous Results Charts
  new Chart(document.getElementById('resultChart1'), {
    type: 'radar',
    data: {
      labels: ['Math', 'English', 'Science', 'Urdu', 'Computer'],
      datasets: [{
        label: 'First Term',
        data: [85, 90, 78, 88, 82],
        borderColor: 'rgba(52, 152, 219, 1)',
        backgroundColor: 'rgba(52, 152, 219, 0.2)'
      }, {
        label: 'Second Term',
        data: [88, 85, 82, 90, 85],
        borderColor: 'rgba(46, 204, 113, 1)',
        backgroundColor: 'rgba(46, 204, 113, 0.2)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

  new Chart(document.getElementById('resultChart2'), {
    type: 'radar',
    data: {
      labels: ['Math', 'English', 'Science', 'Urdu', 'Computer'],
      datasets: [{
        label: 'First Term',
        data: [92, 88, 84, 90, 89],
        borderColor: 'rgba(52, 152, 219, 1)',
        backgroundColor: 'rgba(52, 152, 219, 0.2)'
      }, {
        label: 'Second Term',
        data: [94, 90, 88, 92, 91],
        borderColor: 'rgba(46, 204, 113, 1)',
        backgroundColor: 'rgba(46, 204, 113, 0.2)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}); 