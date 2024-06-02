import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

  subjects = [
    { id: 1, name: 'Введение в программирование', code: '40-0-01', department: 'ПОИСиТ' },
    { id: 2, name: 'Алгоритмы и структуры данных', code: '40-0-02', department: 'Высшая математика' },
    { id: 3, name: 'Основы архитектуры компьютера', code: '40-0-03', department: 'РТС' },
    { id: 4, name: 'Программирование на C++', code: '40-0-04', department: 'ПОИСиТ' },
    { id: 5, name: 'Web-программирование', code: '40-0-05', department: 'РТС' },
    { id: 6, name: 'Базы данных и SQL', code: '40-0-06', department: 'ПОИСиТ' },
    { id: 7, name: 'Алгоритмы машинного обучения', code: '40-0-07', department: 'Высшая математика' },
    { id: 8, name: 'Основы разработки мобильных приложений', code: '40-0-08', department: 'РТС' },
    { id: 9, name: 'Функциональное программирование', code: '40-0-09', department: 'ПОИСиТ' },
    { id: 10, name: 'Тестирование программного обеспечения', code: '40-0-10', department: 'РТС' },
    { id: 11, name: 'Архитектура программных систем', code: '40-0-11', department: 'ПОИСиТ' },
    { id: 12, name: 'Программирование на Python', code: '40-0-12', department: 'Высшая математика' },
    { id: 13, name: 'Основы алгоритмизации', code: '40-0-13', department: 'РТС' }
  ];

  filteredSubjects = [...this.subjects];

  newSubject = {
    name: '',
    code: '',
    department: ''
  };

  showForm = false;

  filterNameValue: string = '';
  filterCodeValue: string = '';
  filterDepartmentValue: string = '';

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addSubject() {
    const newId = this.subjects.length ? Math.max(...this.subjects.map(s => s.id)) + 1 : 1;
    const subjectToAdd = {
      id: newId,
      name: this.newSubject.name,
      code: this.newSubject.code,
      department: this.newSubject.department
    };

    this.subjects.push(subjectToAdd);
    this.filterSubjects();
    this.resetNewSubject();
    this.toggleForm();
  }

  resetNewSubject() {
    this.newSubject = {
      name: '',
      code: '',
      department: ''
    };
  }

  search() {
    this.filterSubjects();
  }

  filterSubjects() {
    this.filteredSubjects = this.subjects.filter(subject =>
      subject.name.toLowerCase().includes(this.filterNameValue.toLowerCase()) &&
      subject.code.toLowerCase().includes(this.filterCodeValue.toLowerCase())
    );
  }

  // subjects: any;
  // loaded: boolean;
  // baseUrl: string = environment.application.baseUrl;
  // constructor(
  //   private SubjectService: SubjectService){
  //   this.loaded = false
  // }

  // ngOnInit(): void {
  //   this.getSubjects();
  // }

  // getSubjects(): void {
  //   this.loaded = false;
  //   this.SubjectService.getSubjects(`${this.baseUrl}/subject`)
  //     .subscribe(
  //       subjects => {
  //         this.subjects = subjects;
  //         this.loaded = true;
  //       }
  //     )
  // }

  // resetSubjects(): void {
  //   this.subjects = null;
  //   this.loaded = true;
  // }
}
