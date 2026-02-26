import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="padding: 20px; font-family: Arial">
      <h1 style="color: #1976d2">Angular Control Flow</h1>
      
      <!-- @if / @else пример -->
      <h2>1. Условный рендеринг</h2>
      @if (isLoggedIn) {
        <p style="color: green">✅ Добро пожаловать, {{ username }}!</p>
      } @else {
        <p style="color: red">❌ Пожалуйста, войдите</p>
      }
      <button (click)="toggleLogin()" 
              style="padding: 8px 16px; background: #1976d2; color: white; border: none; border-radius: 4px">
        {{ isLoggedIn ? 'Выйти' : 'Войти' }}
      </button>

      <!-- @for пример -->
      <h2>2. Список городов</h2>
      <ul>
        @for (city of cities; track city) {
          <li>{{ city }}</li>
        }
      </ul>

      <!-- @for с индексом -->
      <h2>3. Задачи на сегодня</h2>
      <table border="1" cellpadding="8" style="border-collapse: collapse">
        <tr style="background: #f0f0f0">
          <th>#</th>
          <th>Задача</th>
          <th>Статус</th>
        </tr>
        @for (todo of todos; track todo.id; let i = $index) {
          <tr>
            <td>{{ i + 1 }}</td>
            <td>{{ todo.text }}</td>
            <td>
              @if (todo.completed) {
                <span style="color: green">✅ Готово</span>
              } @else {
                <span style="color: orange">⏳ В процессе</span>
              }
            </td>
          </tr>
        }
      </table>
    </div>
  `
})
export class AppComponent {
  isLoggedIn = false;
  username = 'Dos';
  cities = ['Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актобе'];
  
  todos = [
    { id: 1, text: 'Пройди туториал Angular', completed: true },
    { id: 2, text: 'Создай интернет-магазин', completed: false },
    { id: 3, text: 'Запушь код на GitHub', completed: false }
  ];

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}