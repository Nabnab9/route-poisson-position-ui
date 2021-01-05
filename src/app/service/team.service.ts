import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import {Position} from '../model/position.model';
import {Team} from '../model/team.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor(
        private httpClient: HttpClient
    ) {}

    getTeams(): Observable<Team[]> {
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
}
