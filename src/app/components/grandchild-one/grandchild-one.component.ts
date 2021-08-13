import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {DataService} from '../../services/data.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-grandchild-one',
  templateUrl: './grandchild-one.component.html',
  styleUrls: ['./grandchild-one.component.scss']
})
export class GrandchildOneComponent implements OnInit {
  public data: Observable<string> | undefined;

  private destroyed$ = new Subject();

  public constructor(private dataService: DataService) {
  }

  public ngOnInit(): void {
    this.data = this.dataService.data$
        .pipe(takeUntil(this.destroyed$));
  }

  public sendMessage(message: string): void {
    if(!message) {
      alert(`Enter a value to send`);
      return;
    }
    this.dataService.updateData(message);
  }

}
