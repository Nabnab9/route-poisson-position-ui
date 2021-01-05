import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import {Position} from '../model/position.model';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PositionService {

    constructor(
        private httpClient: HttpClient
    ) {}

    getPositions(): Observable<Position[]> {
        return this.httpClient
            .get<Position[]>(`${environment.host}/api/positions`)
            .pipe(
                catchError(err => {
                    console.error('Error');
                    throw err;
                })
            )
            .pipe(
              map(positions => positions.map(p => new Position(p))),
              tap(console.log)
            );
    }
}
