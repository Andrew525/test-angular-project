import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../app.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent implements OnInit {

  @Input() items: Observable<Item[]>;
  // itemS: Item[];

  ngOnInit() {
    // this.items.subscribe(items => {
    //   this.itemS = items;
    // });
  }

}
