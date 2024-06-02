import { Component } from '@angular/core';

@Component({
  selector: 'app-study-material',
  templateUrl: './study-material.component.html',
  styleUrl: './study-material.component.css'
})
export class StudyMaterialComponent {
  materials = [
    { id: 1, author: 'Иванов Алексей Сергеевич', title: 'Основы программирования на Python', year: 2020 },
    { id: 2, author: 'Петрова Мария Ивановна', title: 'Введение в алгоритмы', year: 2018 },
    { id: 3, author: 'Смирнов Дмитрий Андреевич', title: 'Объектно-ориентированное программирование на Java', year: 2019 },
    { id: 4, author: 'Кузнецова Анна Викторовна', title: 'Разработка веб-приложений на JavaScript', year: 2021 },
    { id: 5, author: 'Соколов Владимир Петрович', title: 'Базы данных и SQL', year: 2017 },
    { id: 6, author: 'Морозова Екатерина Николаевна', title: 'Программирование на C++', year: 2016 },
    { id: 7, author: 'Волков Николай Григорьевич', title: 'Функциональное программирование на Haskell', year: 2018 },
    { id: 8, author: 'Лебедева Ольга Михайловна', title: 'Основы сетевого программирования', year: 2021 },
    { id: 9, author: 'Киселев Павел Алексеевич', title: 'Разработка мобильных приложений на Android', year: 2019 },
    { id: 10, author: 'Николаева Ирина Сергеевна', title: 'Введение в машинное обучение', year: 2020 },
    { id: 11, author: 'Попов Сергей Владимирович', title: 'Программирование на Ruby', year: 2017 },
    { id: 12, author: 'Новикова Людмила Ивановна', title: 'Основы разработки игр', year: 2021 },
    { id: 13, author: 'Васильев Максим Олегович', title: 'Разработка микросервисов', year: 2020 },
    { id: 14, author: 'Пономарева Юлия Петровна', title: 'Программирование на Swift', year: 2018 },
    { id: 15, author: 'Голубев Александр Сергеевич', title: 'Основы кибербезопасности', year: 2021 },
    { id: 16, author: 'Михайлова Виктория Андреевна', title: 'Программирование на Go', year: 2019 },
    { id: 17, author: 'Романов Григорий Иванович', title: 'Разработка RESTful API', year: 2020 },
    { id: 18, author: 'Федоров Борис Дмитриевич', title: 'Основы DevOps', year: 2021 },
    { id: 19, author: 'Егоров Андрей Алексеевич', title: 'Программирование на Kotlin', year: 2018 },
    { id: 20, author: 'Тимофеева Наталья Сергеевна', title: 'Скриптовое программирование на Python', year: 2019 },
    { id: 21, author: 'Леонова Марина Васильевна', title: 'Программирование на R', year: 2017 },
    { id: 22, author: 'Макарова Оксана Николаевна', title: 'Основы разработки блокчейн', year: 2020 },
    { id: 23, author: 'Никитин Владимир Борисович', title: 'Разработка фронтенда с React', year: 2019 },
    { id: 24, author: 'Орлова Елена Михайловна', title: 'Основы параллельного программирования', year: 2018 },
    { id: 25, author: 'Павлов Дмитрий Олегович', title: 'Программирование на TypeScript', year: 2021 }
  ];

  filteredMaterials = [...this.materials];

  filterAuthorValue: string = '';
  filterTitleValue: string = '';

  search() {
    console.log("asdfas");
    this.filteredMaterials = this.materials.filter(material =>
      (this.filterAuthorValue ? material.author.toLowerCase().includes(this.filterAuthorValue.toLowerCase()) : true) &&
      (this.filterTitleValue ? material.title.toLowerCase().includes(this.filterTitleValue.toLowerCase()) : true)
    );

    this.materials = this.filteredMaterials;
  }

  downloadWord() {
    const element = document.createElement('a');
    const file = new Blob(['This is a Word document'], { type: 'application/msword' });
    element.href = URL.createObjectURL(file);
    element.download = 'document.docx';
    document.body.appendChild(element);
    element.click();
  }
  
  downloadPDF() {
    const element = document.createElement('a');
    const file = new Blob(['This is a PDF document'], { type: 'application/pdf' });
    element.href = URL.createObjectURL(file);
    element.download = 'document.pdf';
    document.body.appendChild(element);
    element.click();
  }
}
