import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { CacheModel } from '../models/cache-model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CacheResolverService {
  constructor(private storage: StorageService) {}

  set(key: string, value: any, timeTolive: number | null) {
    console.log('Set Cache : ', key);

    if (timeTolive) {
      const expiresIn = new Date();
      expiresIn.setSeconds(expiresIn.getSeconds() + timeTolive);
      this.storage.set(
        key,
        CacheModel.ToString(new CacheModel(expiresIn, value))
      );
    } else {
      this.storage.set(key, CacheModel.ToString(new CacheModel(null, value)));
    }
  }

  get(key: string) {
    console.log('get cache');

    const cache = this.storage.get(key);
    console.log(cache);

    if (cache === null) return null;
    const tuple = JSON.parse(cache) as CacheModel;
console.log(tuple);

    // Extract
    const expiresIn = moment(tuple.expiredIn);
    const httpResponse = tuple.event;
    const now = moment(new Date());

    // TODO Test date
    if (expiresIn && expiresIn.isSameOrBefore(now)) {
      this.storage.delete(key);
      return null;
    }
    // TODO Test HttpResponse
    return httpResponse;
  }
}
