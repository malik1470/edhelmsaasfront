document.addEventListener("DOMContentLoaded", function () {
  
  console.log("Teacher Dashboard script loading...");
  
  // Check if Chart.js is loaded
  if (typeof Chart === 'undefined') {
    console.error('Chart.js is not loaded!');
    return;
  }
  
  console.log("Chart.js loaded successfully");

  // Global chart instances
  let chartInstances = {};

  // Initialize all dashboard components
  init();

  // Main initialization function
  function init() {
    initNavigation();
    initCharts();
    initSearchFunctionality();
    initNotifications();
    initScrollAnimations();
    initCounters();
    initMobileMenu();
    initTableSorting();
    initDataRefresh();
    initChartResize();
  }

  // Navigation functionality
  function initNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentSections = document.querySelectorAll('.content-section');

    menuItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetSection = this.getAttribute('data-section');
        
        // Remove active class from all menu items
        menuItems.forEach(menu => menu.classList.remove('active'));
        
        // Add active class to clicked menu item
        this.classList.add('active');
        
        // Hide all content sections
        contentSections.forEach(section => {
          section.classList.remove('active');
        });
        
        // Show target section
        const targetElement = document.getElementById(targetSection + '-section');
        if (targetElement) {
          targetElement.classList.add('active');
          
          // Initialize section-specific content
          initSectionContent(targetSection);
        }
        
        console.log(`Switched to ${targetSection} section`);
      });
    });
  }

  // Initialize section-specific content
  function initSectionContent(section) {
    switch(section) {
      case 'dashboard':
        initDashboardCharts();
        break;
      case 'my-classes':
        initClassesCharts();
        break;
      case 'attendance':
        initAttendanceCharts();
        break;
      case 'gradebook':
        initGradebookCharts();
        break;
      case 'assignments':
        initAssignmentCharts();
        break;
      case 'reports':
        initReportCharts();
        break;
    }
  }

  // Dashboard Charts
  function initDashboardCharts() {
    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart');
    if (performanceCtx && !chartInstances.performanceChart) {
      chartInstances.performanceChart = new Chart(performanceCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Class Average',
            data: [85, 88, 87, 90, 86, 92],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              min: 60,
              max: 100
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            }
          }
        }
      });
    }

    // Attendance Chart
    const attendanceCtx = document.getElementById('attendanceChart');
    if (attendanceCtx && !chartInstances.attendanceChart) {
      chartInstances.attendanceChart = new Chart(attendanceCtx, {
        type: 'doughnut',
        data: {
          labels: ['Present', 'Absent', 'Late'],
          datasets: [{
            data: [85, 10, 5],
            backgroundColor: ['#2ecc71', '#e74c3c', '#f39c12']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    }
  }

  // Classes Charts
  function initClassesCharts() {
    const classComparisonCtx = document.getElementById('classComparisonChart');
    if (classComparisonCtx && !chartInstances.classComparisonChart) {
      chartInstances.classComparisonChart = new Chart(classComparisonCtx, {
        type: 'bar',
        data: {
          labels: ['Class 10A', 'Class 10B', 'Class 9A'],
          datasets: [{
            label: 'Average Score',
            data: [85, 88, 82],
            backgroundColor: ['#3498db', '#2ecc71', '#f39c12']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100
            }
          }
        }
      });
    }
  }

  // Reports Charts
  function initReportCharts() {
    // Performance Trends Chart
    const trendCtx = document.getElementById('performanceTrendChart');
    if (trendCtx && !chartInstances.performanceTrendChart) {
      chartInstances.performanceTrendChart = new Chart(trendCtx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
          datasets: [{
            label: 'Class 10A',
            data: [82, 85, 87, 89, 88, 92],
            borderColor: '#3498db',
            tension: 0.4
          }, {
            label: 'Class 10B',
            data: [85, 87, 86, 88, 90, 91],
            borderColor: '#2ecc71',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              min: 60,
              max: 100
            }
          }
        }
      });
    }

    // Attendance Overview Chart
    const overviewCtx = document.getElementById('attendanceOverviewChart');
    if (overviewCtx && !chartInstances.attendanceOverviewChart) {
      chartInstances.attendanceOverviewChart = new Chart(overviewCtx, {
        type: 'bar',
        data: {
          labels: ['Class 10A', 'Class 10B', 'Class 9A'],
          datasets: [{
            label: 'Present',
            data: [90, 88, 85],
            backgroundColor: '#2ecc71'
          }, {
            label: 'Absent',
            data: [7, 8, 10],
            backgroundColor: '#e74c3c'
          }, {
            label: 'Late',
            data: [3, 4, 5],
            backgroundColor: '#f39c12'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              stacked: true
            },
            x: {
              stacked: true
            }
          }
        }
      });
    }

    // Student Progress Chart
    const progressCtx = document.getElementById('studentProgressChart');
    if (progressCtx && !chartInstances.studentProgressChart) {
      chartInstances.studentProgressChart = new Chart(progressCtx, {
        type: 'line',
        data: {
          labels: ['Quiz 1', 'Quiz 2', 'Midterm', 'Quiz 3', 'Quiz 4', 'Final'],
          datasets: [{
            label: 'Score',
            data: [85, 88, 92, 86, 90, 94],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
              min: 60,
              max: 100
            }
          }
        }
      });
    }
  }

  // Search Functionality
  function initSearchFunctionality() {
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
      });
    }
  }

  // Notifications
  function initNotifications() {
    const notificationIcon = document.querySelector('.header-icons .fa-bell');
    if (notificationIcon) {
      notificationIcon.addEventListener('click', () => {
        showNotification('You have 3 new notifications', 'info');
      });
    }
  }

  // Show Notification
  function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <i class="${getNotificationIcon(type)}"></i>
      <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 3000);
  }

  // Get Notification Icon
  function getNotificationIcon(type) {
    switch(type) {
      case 'success': return 'fas fa-check-circle';
      case 'error': return 'fas fa-times-circle';
      case 'warning': return 'fas fa-exclamation-circle';
      default: return 'fas fa-info-circle';
    }
  }

  // Scroll Animations
  function initScrollAnimations() {
    const elements = document.querySelectorAll('.stat-card, .chart-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    });
    
    elements.forEach(element => observer.observe(element));
  }

  // Counter Animation
  function initCounters() {
    const counters = document.querySelectorAll('.stat-content h3');
    counters.forEach(counter => {
      const target = parseInt(counter.textContent);
      if (!isNaN(target)) {
        animateCounter(counter, target);
      }
    });
  }

  function animateCounter(element, target) {
    let current = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      current += increment;
      element.textContent = Math.round(current);
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      }
    }, 50);
  }

  // Mobile Menu
  function initMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.top-header').prepend(menuToggle);

    menuToggle.addEventListener('click', () => {
      document.querySelector('.sidebar').classList.toggle('show');
    });

    // Close menu on window resize if screen becomes larger
    window.addEventListener('resize', checkMobile);
    
    function checkMobile() {
      if (window.innerWidth > 992) {
        document.querySelector('.sidebar').classList.remove('show');
      }
    }
  }

  // Table Sorting
  function initTableSorting() {
    const tables = document.querySelectorAll('.table');
    tables.forEach(table => {
      const headers = table.querySelectorAll('th');
      headers.forEach((header, index) => {
        if (!header.classList.contains('no-sort')) {
          header.addEventListener('click', () => {
            sortTable(table, index);
          });
          header.style.cursor = 'pointer';
        }
      });
    });
  }

  // Sort table
  function sortTable(table, column) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isNumeric = rows.every(row => !isNaN(row.children[column].textContent));
    
    rows.sort((a, b) => {
      const aValue = a.children[column].textContent;
      const bValue = b.children[column].textContent;
      
      if (isNumeric) {
        return parseFloat(aValue) - parseFloat(bValue);
      }
      return aValue.localeCompare(bValue);
    });
    
    rows.forEach(row => tbody.appendChild(row));
  }

  // Chart Resize
  function initChartResize() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        Object.values(chartInstances).forEach(chart => {
          if (chart && typeof chart.resize === 'function') {
            chart.resize();
          }
        });
      }, 250);
    });
  }

  // Data Refresh
  function initDataRefresh() {
    setInterval(() => {
      updateDashboardStats();
    }, 300000); // Refresh every 5 minutes
  }

  function updateDashboardStats() {
    // Implement API calls to refresh dashboard data
    console.log('Updating dashboard stats...');
  }
});

