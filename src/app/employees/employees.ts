import { Component, OnInit, inject, signal } from '@angular/core';
import { EmployeeService, Employee } from '../services/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})

export class EmployeesComponent implements OnInit {
  private employeeService = inject(EmployeeService);

  employees = signal<Employee[]>([]);
  loading = signal(false);
  errorMessage = signal('');

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.loading.set(true);
    this.errorMessage.set('');

    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees.set(data);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('API error:', error);
        this.errorMessage.set('Failed to load employees.');
        this.loading.set(false);
      }
    });
  }
}
