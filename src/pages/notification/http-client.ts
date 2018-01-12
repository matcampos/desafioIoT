import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()

export class HttpClient {

    constructor(private _http: Http) {
    }

    createAuthorizationHeader(headers?: Headers): Headers {
        if (headers == null) {
            headers = new Headers();
        }
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    //Verificar se o option esta preenchido, caso não estiver criar um novo
    getRequestOptionsArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        options.headers = this.createAuthorizationHeader(options.headers);
        return options;
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.get(url, this.getRequestOptionsArgs(options));
    }

    post(url: string, data, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.post(url, data, this.getRequestOptionsArgs(options));
    }

    put(url: string, data, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.put(url, data, this.getRequestOptionsArgs(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this._http.delete(url, this.getRequestOptionsArgs(options));
    }

}