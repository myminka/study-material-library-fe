import { Component } from '@angular/core';

interface Program {
  id: number;
  subjectName: string;
  isApproved: boolean;
  dateIssue: string;
  registrationNumber: string;
  createdBy: string;
  isActive: boolean;
  fileId: number;
}
@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrl: './program.component.css'
})
export class ProgramComponent {
  programs: Program[] = [
    { id: 1, subjectName: 'Информатика', isApproved: true, dateIssue: '2022', registrationNumber: '12345', createdBy: 'Иванов И.И.', isActive: true, fileId: 1 },
    { id: 2, subjectName: 'Математика', isApproved: false, dateIssue: '2021', registrationNumber: '67890', createdBy: 'Петров П.П.', isActive: false, fileId: 2 },
    { id: 3, subjectName: 'Программирование на Java', isApproved: true, dateIssue: '2023', registrationNumber: '13579', createdBy: 'Сидоров С.С.', isActive: true, fileId: 3 },
    { id: 4, subjectName: 'Программирование на Python', isApproved: false, dateIssue: '2021', registrationNumber: '24680', createdBy: 'Кузнецов К.К.', isActive: true, fileId: 4 },
    { id: 5, subjectName: 'Программирование на JavaScript', isApproved: true, dateIssue: '2022', registrationNumber: '35791', createdBy: 'Павлов П.П.', isActive: false, fileId: 5 },
    { id: 6, subjectName: 'Web-программирование', isApproved: true, dateIssue: '2023', registrationNumber: '46802', createdBy: 'Григорьев Г.Г.', isActive: true, fileId: 6 },
    { id: 7, subjectName: 'Алгоритмы и структуры данных', isApproved: false, dateIssue: '2021', registrationNumber: '57913', createdBy: 'Федоров Ф.Ф.', isActive: false, fileId: 7 },
    { id: 8, subjectName: 'Базы данных и SQL', isApproved: true, dateIssue: '2022', registrationNumber: '68024', createdBy: 'Алексеев А.А.', isActive: true, fileId: 8 },
    { id: 9, subjectName: 'Автоматизация тестирования', isApproved: false, dateIssue: '2021', registrationNumber: '79135', createdBy: 'Сергеев С.С.', isActive: false, fileId: 9 },
    { id: 10, subjectName: 'Разработка мобильных приложений', isApproved: true, dateIssue: '2023', registrationNumber: '80246', createdBy: 'Борисов Б.Б.', isActive: true, fileId: 10 },
    { id: 11, subjectName: 'Frontend-разработка', isApproved: false, dateIssue: '2021', registrationNumber: '91357', createdBy: 'Дмитриев Д.Д.', isActive: false, fileId: 11 },
    { id: 12, subjectName: 'Backend-разработка', isApproved: true, dateIssue: '2022', registrationNumber: '02468', createdBy: 'Игнатьев И.И.', isActive: true, fileId: 12 },
    { id: 13, subjectName: 'Разработка игр', isApproved: false, dateIssue: '2021', registrationNumber: '13579', createdBy: 'Антонов А.А.', isActive: false, fileId: 13 },
    { id: 14, subjectName: 'Архитектура ПО', isApproved: true, dateIssue: '2022', registrationNumber: '24680', createdBy: 'Егоров Е.Е.', isActive: true, fileId: 14 },
    { id: 15, subjectName: 'Мобильная разработка', isApproved: false, dateIssue: '2021', registrationNumber: '35791', createdBy: 'Константинов К.К.', isActive: false, fileId: 15 },
    { id: 16, subjectName: 'DevOps', isApproved: true, dateIssue: '2023', registrationNumber: '46802', createdBy: 'Николаев Н.Н.', isActive: true, fileId: 16 },
    { id: 17, subjectName: 'Компьютерная графика', isApproved: false, dateIssue: '2021', registrationNumber: '57913', createdBy: 'Петухов П.П.', isActive: false, fileId: 17 },
    { id: 18, subjectName: 'Тестирование ПО', isApproved: true, dateIssue: '2022', registrationNumber: '68024', createdBy: 'Романов Р.Р.', isActive: true, fileId: 18 },
    { id: 19, subjectName: 'UI/UX дизайн', isApproved: false, dateIssue: '2021', registrationNumber: '79135', createdBy: 'Савельев С.С.', isActive: false, fileId: 19 },
    { id: 20, subjectName: 'Криптография', isApproved: true, dateIssue: '2023', registrationNumber: '80246', createdBy: 'Тихонов Т.Т.', isActive: true, fileId: 20 },
    { id: 21, subjectName: 'Интернет-безопасность', isApproved: false, dateIssue: '2021', registrationNumber: '91357', createdBy: 'Устинов У.У.', isActive: false, fileId: 21 }
  ];

  newProgram: Program = {
    id: 0,
    subjectName: '',
    isApproved: false,
    dateIssue: '',
    registrationNumber: '',
    createdBy: '',
    isActive: false,
    fileId: 0
  };

  showForm = false;
  selectedProgram: Program | null = null;
  nextFileId = 3;

  filterSubject = '';
  filterDate: string | null = null;
  filterRegNumber = '';
  filterActive = 'all';

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addProgram() {
    const newId = this.programs.length ? Math.max(...this.programs.map(p => p.id)) + 1 : 1;
    const newFileId = this.nextFileId++;
    const programToAdd = { ...this.newProgram, id: newId, fileId: newFileId };

    this.programs.push(programToAdd);
    this.resetNewProgram();
    this.toggleForm();
  }

  resetNewProgram() {
    this.newProgram = {
      id: 0,
      subjectName: '',
      isApproved: false,
      dateIssue: '',
      registrationNumber: '',
      createdBy: '',
      isActive: false,
      fileId: 0
    };
  }

  selectProgram(program: Program) {
    this.selectedProgram = { ...program };
  }

  deselectProgram() {
    this.selectedProgram = null;
  }

  saveProgram() {
    if (this.selectedProgram) {
      const index = this.programs.findIndex(p => p.id === this.selectedProgram!.id);
      if (index !== -1) {
        this.programs[index] = this.selectedProgram;
      }
      this.deselectProgram();
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Здесь можно реализовать логику обработки файла
      console.log(`Файл загружен: ${file.name}`);
    }
  }

  applyFilters() {
    // Фильтрация программ по заданным критериям
  
    // Копируем исходный список программ для применения фильтров
    let filteredPrograms = [...this.programs];
  
    // Фильтр по названию предмета
    if (this.filterSubject) {
      filteredPrograms = filteredPrograms.filter(program => program.subjectName.toLowerCase().includes(this.filterSubject.toLowerCase()));
    }
  
    // Фильтр по дате выпуска
    if (this.filterDate) {
      filteredPrograms = filteredPrograms.filter(program => program.dateIssue === this.filterDate);
    }
  
    // Фильтр по регистрационному номеру
    if (this.filterRegNumber) {
      filteredPrograms = filteredPrograms.filter(program => program.registrationNumber.toLowerCase().includes(this.filterRegNumber.toLowerCase()));
    }
  
    // Фильтр по активности
    if (this.filterActive !== '') {
      const isActive = this.filterActive === 'true';
      filteredPrograms = filteredPrograms.filter(program => program.isActive === isActive);
    }
  
    // Обновляем список отфильтрованных программ
    this.programs = filteredPrograms;
  }
  downloadFile(fileId: number) {
    const element = document.createElement('a');
    const file = new Blob(['This is a Word document'], { type: 'application/msword' });
    element.href = URL.createObjectURL(file);
    element.download = 'document.docx';
    document.body.appendChild(element);
    element.click();
    console.log(`Скачивание файла с ID: ${fileId}`);
  }
}