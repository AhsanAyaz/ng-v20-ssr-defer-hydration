import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-indicator',
  imports: [],
  template: `
    <div class="flex items-center justify-center h-64">
      Loading...
      <div class="loading loading-spinner loading-md"></div>
    </div>
  `,
  styles: ``,
})
export class LoadingIndicator {}
