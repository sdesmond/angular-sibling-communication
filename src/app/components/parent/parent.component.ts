import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public message: string | undefined;

  public info = '';

  public constructor() {
  }

  public ngOnInit(): void {
  }


  public messageReceived($event: string) {
    this.info = `ParentComponent: updating message to '${$event}'`;
    console.log(this.info);
    this.message = $event;
  }
}
