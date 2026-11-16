import { Component, signal } from '@angular/core';
import { EmployeesComponent } from './employees/employees';

@Component({
  selector: 'app-root',
  imports: [EmployeesComponent],
  template: '<app-employees>'
})
export class App {
  protected readonly title = signal('my-angular-app');
}
