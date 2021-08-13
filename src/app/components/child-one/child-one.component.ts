import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit, OnDestroy {
  public data: Observable<string> | undefined;

  private destroyed$ = new Subject();

  public constructor(private dataService: DataService) {
  }

  public ngOnInit(): void {
    this.data = this.dataService.data$
        .pipe(takeUntil(this.destroyed$));
  }

  public ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public sendMessage(message: string): void {
    if(!message) {
      alert(`Enter a value to send`);
      return;
    }
    this.dataService.updateData(message);
  }

}
