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
        map(team => team.map(p => new Team(p)))
      );
  }

  postTeam(team: Team): Observable<Team> {
    return this.httpClient
      .post<Team>(`${environment.host}/api/teams`, team)
      .pipe(
        catchError(err => {
          console.error('Error');
          throw err;
        })
      )
      .pipe(
        map(t => new Team(t))
      );
  }

  deleteTeam(teamId: string): Observable<any> {
    return this.httpClient
      .delete(`${environment.host}/api/teams/${teamId}`)
      .pipe(
        catchError(err => {
          console.error('Error');
          throw err;
        })
      );
  }

  getTeams(): Observable<Team[]> {
    return this.teams$;
  }

  ngOnDestroy(): void {
    this.stopPolling.next();
  }
}
