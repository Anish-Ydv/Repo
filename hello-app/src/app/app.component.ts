import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <h2>Github jenkins Integration</h2>
      <h2>Another Edit</h2>
    </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'hello-app';
}
