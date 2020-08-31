import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


export interface AuthResponseData {
    idToken: string;
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private http: HttpClient) { }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZxtC2r_KkOHBBWHuePlVrNYIH56M-XOo',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.handleError));
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZxtC2r_KkOHBBWHuePlVrNYIH56M-XOo',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(this.handleError));
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An Unknown Error Occured';
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This Email already Exists';
                break;
            case 'EMAIL_NOT_FOUND':
                    errorMessage='This Email does not Exist';
                    break;
            case 'INVALID_PASSWORD':
                    errorMessage='This Password is not correct';
                    break;
                
                

            }
        return throwError(errorMessage);
    }
}