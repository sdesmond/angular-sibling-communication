import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit, OnChanges {
  @Input()
  public in: string | undefined;

  @Output()
  public out = new EventEmitter<string>();

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log(`ChildTwoComponent: ngOnChanges triggered '${changes.in.currentValue}'`);
  }

  public sendMessage(message: string): void {
    if(!message) {
      alert(`Enter a value to send`);
      return;
    }
    this.out.emit(message);
  }

  public messageReceived($event: string) {
    // this.info = `ParentComponent: updating message to '${$event}'`;
    // console.log(this.info);
    this.sendMessage($event);
  }
}
