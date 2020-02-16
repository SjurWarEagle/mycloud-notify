import { Injectable } from '@nestjs/common';
import * as Push from 'pushover-notifications';

@Injectable()
export class AppService {
  public sendMessage(): void {
    const p = new Push({
      user: process.env['PUSHOVER_USER'],
      token: process.env['PUSHOVER_TOKEN'],
      // onerror: function(error) {},
      // update the list of sounds every day - will prevent app from exiting.
      'update_sounds': true,
    });

    const msg = {
      // These values correspond to the parameters detailed on https://pushover.net/api
      // 'message' is required. All other values are optional.
      message: 'omg node test', // required
      title: 'Well - this is fantastic',
      sound: 'magic',
      device: 'MyCloud',
      priority: 1,
    };

    p.send(msg, function(err, result) {
      if (err) {
        throw err;
      }

      console.log(result);
    });
  }
}
