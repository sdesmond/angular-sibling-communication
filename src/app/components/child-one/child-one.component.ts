import {Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit, OnChanges {

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
