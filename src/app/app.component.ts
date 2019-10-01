import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileSizePipe } from './filesize/fileSize.pipe';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div>
      <app-stock-inventory></app-stock-inventory>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
  providers: [
      FileSizePipe
  ]
})
export class AppComponent implements OnInit {
  title = 'test-project';
  items = [{name: 'John'}, {name: 'Vasa'}, {name: 'Doni'}, {name: 'Rafi'}];
  items$ = new BehaviorSubject(this.items);
  // tslint:disable-next-line:ban-types
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  files: File[];
  mapped: File[];

  constructor( private fileSizePipe: FileSizePipe) {}

  ngOnInit(): void {
    this.files = [
      {name: 'log.svg', size: 1212223, type: 'image/svg'},
      {name: 'banner.jpg', size: 2222222, type: 'image/jpg'},
      {name: 'background.png', size: 3332223, type: 'image/png'}
    ];
    this.mapped = this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.fileSizePipe.transform(file.size, 'mb')
      };
    });
  }

  add() {
    // this.items.push({ title: Math.random() })
    // this.items$.next(this.items);
  }
}

class File {
  name: string;
  size: any;
  type: string;
}

export interface Item {
  title: number;
}
