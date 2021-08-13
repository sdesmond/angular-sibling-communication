import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new ReplaySubject<string>(1);
  public data$ = this.dataSubject.asObservable();

  public constructor() {
  }

  public updateData(data: string) {
    this.dataSubject.next(data);
  }
}
