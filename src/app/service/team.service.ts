import {Observable, Subject, timer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable, OnDestroy} from '@angular/core';
import {catchError, map, retry, share, switchMap, takeUntil, tap} from 'rxjs/operators';
import {Position} from '../model/position.model';
import {Team} from '../model/team.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService implements OnDestroy {

  private readonly teams$: Observable<Team[]>;

  private stopPolling = new Subject();

  constructor(
    private httpClient: HttpClient
  ) {
    this.teams$ = timer(0, 10000).pipe(
      tap(console.log),
      switchMap(() => this.getTeamsCall()),
      retry(),
      takeUntil(this.stopPolling)
    );
  }

  getTeamsCall(): Observable<Team[]> {
    return this.httpClient
      .get<Position[]>(`${environment.host}/api/teams`)
      .pipe(
        catchError(err => {
          console.error('Error');
          throw err;
        })
      )
      .pipe(
        map(team => team.map(p => new Team(p))),
        tap(console.log)
      );
  }

  getTeams(): Observable<Team[]> {
    console.log('getTeams called');
    console.log('this.teams$ : ', this.teams$);
    return this.teams$;
  }

  ngOnDestroy(): void {
    this.stopPolling.next();
  }
}
