// tslint:disable-next-line:no-submodule-imports
import { merge } from 'lodash-es';
export class Event {
  public type: string;
  constructor(type: string, data: any = {}) {
    merge(this, data);
    this.type = type;
  }
}
