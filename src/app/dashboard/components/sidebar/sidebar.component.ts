import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  username: string = 'Prueba';
  @Output() variableSelected: EventEmitter<string> = new EventEmitter<string>();

  variables = [
    { name: 'Top Universities', id: 'var1' },
    { name: 'Top schools', id: 'var2' },
  ];

  selectVariable(variable: any) {
    this.variableSelected.emit(variable.id);
    console.log(this.variableSelected);
  }

}
