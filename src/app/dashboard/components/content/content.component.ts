import { Component, Input } from '@angular/core';
import { VarService } from '../../services/variables/var.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgIf],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() selectedVariable: string = '';

  constructor(private apiService: VarService) {}

  performAction(actionType: string) {
    if (actionType === 'get') {
      this.apiService.getData(this.selectedVariable).subscribe(data => {
        console.log('Get data:', data);
      });
      // console.log('get')
    } else if (actionType === 'query') {
      // Lógica adicional para query (mostrar un formulario si es necesario)
      console.log('query')
    } else if (actionType === 'update') {
      // this.apiService.updateData(this.selectedVariable).subscribe(data => {
      //   console.log('Update response:', data);
      // });
      console.log('update')
    } else if (actionType === 'link') {
      // this.apiService.getLink(this.selectedVariable).subscribe(link => {
      //   console.log('Generated link:', link);
      // });
      console.log('link')
    }
  }

}
