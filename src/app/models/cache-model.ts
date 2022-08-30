import { HttpResponse } from "@angular/common/http";

export class CacheModel {
  constructor(
    public expiredIn: Date | null= new Date,
    public event: HttpResponse<any> =new HttpResponse<any>()
  ) {}
  static ToString(cache:CacheModel):string{
    return JSON.stringify({expiredIn:cache.expiredIn,event:cache.event});
  }
}
