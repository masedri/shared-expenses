import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const http = inject(HttpClient);
const url = '';

export const customHttp = {
  find<T>(id: string) {
    return http.get<T>(url);
  },
  create<T>(id: string, payload: {}) {
    return http.post<T>(url, payload);
  },
  update<T>(id: string, payload: {}) {
    return http.put<T>(url, payload);
  },
  remove<T>(id: string) {
    return http.delete<T>('');
  },
};
