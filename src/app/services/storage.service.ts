import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  set(key: string, value: string, type: 'local' | 'session' = 'local') {
    if (type === 'local') localStorage.setItem(key, value);
    else sessionStorage.setItem(key, value);
  }
  get(key: string, type: 'local' | 'session' = 'local') :string | null {
    if (type === 'local') return localStorage.getItem(key);
    else return sessionStorage.getItem(key);
  }

  delete(key: string, type: 'local' | 'session' = 'local') {
    if (type === 'local')  localStorage.removeItem(key);
    else  sessionStorage.removeItem(key);
  }
}
