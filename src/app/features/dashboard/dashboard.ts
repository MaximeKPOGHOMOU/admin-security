import { AfterViewInit, Component } from '@angular/core';

declare var Chart: any; // Chart.js chargé globalement via script

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard implements AfterViewInit {

  ngAfterViewInit(): void {

    // --- Graphique Ventes ---
    const ctxVentes = document.getElementById('chart-line') as HTMLCanvasElement;
    if (ctxVentes) {
      new Chart(ctxVentes, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Ventes',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: true } },
          scales: { y: { beginAtZero: true } }
        }
      });
    }

    // --- Graphique Completed Tasks ---
    const ctxTasks = document.getElementById('chart-line-tasks') as HTMLCanvasElement;
    if (ctxTasks) {
      new Chart(ctxTasks, {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Completed Tasks',
            data: [12, 19, 14, 18, 20, 16, 22],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true } }
        }
      });
    }

    // --- Graphique Website Views (bar chart) ---
    const ctxBars = document.getElementById('chart-bars') as HTMLCanvasElement;
    if (ctxBars) {
      new Chart(ctxBars, {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Website Views',
            data: [120, 200, 150, 170, 220, 190, 230],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }

  }

}