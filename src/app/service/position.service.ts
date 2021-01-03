import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import {Position} from '../model/position.model';

@Injectable({
    providedIn: 'root'
})
export class PositionService {

    constructor(
        private httpClient: HttpClient
    ) {}

    getPositions(): Observable<Position[]> {
        return this.httpClient
            .get<Position[]>(`http://192.168.0.46:8000/api/positions/`)
            .pipe(
                catchError(err => {
                    console.error('Error');
                    throw err;
                }),
                tap(console.log)
            )
            .pipe(map(positions => positions.map(p => new Position(p))));
    }
}
