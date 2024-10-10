import {Injectable }from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError  } from "rxjs";
import { throwError } from "rxjs";

@Injectable
(
    {
    providedIn: 'root',

    }
)



export class AuthenticationService {

    private apiUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBK4BOAweNo1FMMNU8InO2oPz5sw9qNxZQ';


    constructor(private http: HttpClient) { }
    
    signUp(email: string, password: string) 
    {
        return this.http.post<AuthResponceData>(this.apiUrl, 
            {
            email: email,
            password: password,
            returnSecureToken: true,
            }
        ).pipe(
            catchError(
                (errorRes)   => {
            let errorMessage = "unknown error";
            if (!errorRes.error || !errorRes.error.error) {
                return throwError(errorMessage);
            }
            return throwError(errorMessage);
        }))
    }
}
    




interface AuthResponceData
 {
        idToken: string,
        email: string,
        refreshToken: string,
        expiresIn: string,
        localId: string
 }
