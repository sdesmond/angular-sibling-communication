import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-grandchild-one',
  templateUrl: './grandchild-one.component.html',
  styleUrls: ['./grandchild-one.component.scss']
})
export class GrandchildOneComponent implements OnInit {
  @Input()
  public in: string | undefined;

  @Output()
  public out = new EventEmitter<string>();

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log(`ChildOneComponent: ngOnChanges triggered '${changes.in.currentValue}'`);
  }

  public sendMessage(message: string): void {
    if(!message) {
      alert(`Enter a value to send`);
      return;
    }
    this.out.emit(message);
  }

}
