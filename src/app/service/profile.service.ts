import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import {Position} from '../model/position.model';
import {Profile} from '../model/profile.model';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(
        private httpClient: HttpClient
    ) {}

    getProfiles(): Observable<Profile[]> {
        return this.httpClient
            .get<Position[]>(`http://192.168.0.46:8000/api/profiles/`)
            .pipe(
                catchError(err => {
                    console.error('Error');
                    throw err;
                }),
                tap(console.log)
            )
            .pipe(map(profile => profile.map(p => new Profile(p))));
    }
}
