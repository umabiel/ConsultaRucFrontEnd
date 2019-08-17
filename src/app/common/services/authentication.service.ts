import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http
      .post<any>(
        `${environment.backend}/login`,
        { username, password },
        { observe: 'response' }
      )
      .pipe(
        map(response => {
          const jwtToken = response.headers
            .get('Authorization')
            .replace('Bearer', '')
            .trim();

          if (jwtToken) {
            localStorage.setItem('currentToken', jwtToken);
          }

        })
      );
  }

  logout() {
    localStorage.removeItem('currentToken');
  }
}
