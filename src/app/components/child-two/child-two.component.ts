import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.scss']
})
export class ChildTwoComponent implements OnInit, OnChanges {
  @Input()
  public in: string | undefined;

  public constructor() {
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log(`ChildTwoComponent: ngOnChanges triggered '${changes.in.currentValue}'`);
  }
}
