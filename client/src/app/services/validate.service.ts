import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  // Required fields
  validateSearch(params) {
    if (params.screen_name == undefined || params.screen_name == null || params.screen_name.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  // Type
  validateType(screen_name) {
    const re = /^[\w\d_]{1,15}$/;
    return re.test(screen_name);
  }
}
