import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrl: './tutor.component.css'
})
export class TutorComponent{
  filterSurnameValue: string = '';

  tutors = [
    { id: 1, surname: 'Иванов', name: 'Иван', patronymic: 'Иванович', department: 'ПОИСиТ', subjects: 'Программирование, Web-технологии' },
    { id: 2, surname: 'Петров', name: 'Петр', patronymic: 'Петрович', department: 'РТС', subjects: 'Программирование, Базы данных' },
    { id: 3, surname: 'Сидоров', name: 'Сидор', patronymic: 'Сидорович', department: 'Высшая математика', subjects: 'Программирование, Математическая логика' },
    { id: 4, surname: 'Кузнецова', name: 'Екатерина', patronymic: 'Сергеевна', department: 'ПОИСиТ', subjects: 'Программирование, Информационная безопасность' },
    { id: 5, surname: 'Смирнова', name: 'Ольга', patronymic: 'Владимировна', department: 'Высшая математика', subjects: 'Программирование, Алгоритмы и структуры данных' },
    { id: 6, surname: 'Морозов', name: 'Алексей', patronymic: 'Викторович', department: 'РТС', subjects: 'Программирование, Архитектура компьютера' },
    { id: 7, surname: 'Васильев', name: 'Дмитрий', patronymic: 'Павлович', department: 'ПОИСиТ', subjects: 'Программирование, Компьютерные сети' },
    { id: 8, surname: 'Николаева', name: 'Мария', patronymic: 'Андреевна', department: 'Высшая математика', subjects: 'Программирование, Математический анализ' },
    { id: 9, surname: 'Григорьев', name: 'Станислав', patronymic: 'Игоревич', department: 'РТС', subjects: 'Программирование, Микропроцессоры и микроконтроллеры' },
    { id: 10, surname: 'Федоров', name: 'Владимир', patronymic: 'Сергеевич', department: 'ПОИСиТ', subjects: 'Программирование, Моделирование систем' },
    { id: 11, surname: 'Степанова', name: 'Анастасия', patronymic: 'Александровна', department: 'Высшая математика', subjects: 'Программирование, Линейная алгебра' },
    { id: 12, surname: 'Захаров', name: 'Василий', patronymic: 'Иванович', department: 'РТС', subjects: 'Программирование, Функциональное программирование' },
    { id: 13, surname: 'Игнатьева', name: 'Елена', patronymic: 'Дмитриевна', department: 'ПОИСиТ', subjects: 'Программирование, Web-дизайн' },
    { id: 14, surname: 'Козлов', name: 'Михаил', patronymic: 'Петрович', department: 'Высшая математика', subjects: 'Программирование, Теория вероятностей и математическая статистика' },
    { id: 15, surname: 'Александров', name: 'Александр', patronymic: 'Александрович', department: 'РТС', subjects: 'Программирование, Операционные системы' },
    { id: 16, surname: 'Павлова', name: 'Анастасия', patronymic: 'Владимировна', department: 'ПОИСиТ', subjects: 'Программирование, Проектирование баз данных' }
  ];

  constructor() { }

  filteredTutors = [...this.tutors];
  // Метод поиска преподавателя
  search() {
    // Преобразовываем значение фильтра в нижний регистр
    const filterValue = this.filterSurnameValue.toLowerCase().trim();
  
    // Если фильтр пустой, то отображаем всех преподавателей
    if (!filterValue) {
      this.filteredTutors = this.tutors;
      return;
    }
  
    // Иначе фильтруем список преподавателей по фамилии
    this.filteredTutors = this.tutors.filter(tutor => {
      // Преобразуем фамилию преподавателя в нижний регистр
      const surname = tutor.surname.toLowerCase();
  
      // Проверяем, содержит ли фамилия преподавателя введенное значение фильтра
      return surname.includes(filterValue);
    });
  }
  // tutors: any;
  // loaded: boolean;
  // baseUrl: string = environment.application.baseUrl;
  // constructor(
  //   private TutorService: TutorService){
  //   this.loaded = false; 
  // }

  // ngOnInit(): void {
  //   this.getTutors();
  // }

  // getTutors(): void{
  //   this.loaded = false;
  //   this.TutorService.getTutors(`${this.baseUrl}/user`)
  //   .subscribe(
  //     tutors => {
  //       this.tutors = tutors;
  //       this.loaded = true;
  //     }
  //   )
  // }
}
