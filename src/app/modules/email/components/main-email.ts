import {
    Component
} from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
    <div class="panel panel-default">
        <h2>{{title}}</h2>
        <hr>
        <save-email></save-email>
        <show-email></show-email>
    </div>
  `,
})

export class MainEmailComponent{
  title = 'Modulo de emails';
}
