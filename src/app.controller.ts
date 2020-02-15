import * as ifttWebhooks from 'ifttt-webhooks';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('notify')
export class AppController {
  private ifttt;

  constructor() {
    // create an instance
    this.ifttt = new ifttWebhooks.IFTTT(process.env['IFTTT_WEBHOOK']);
  }

  @Get('/send')
  public sendText(
    @Query('title') title: string,
    @Query('body') body?: string,
  ): string {
    return this.sendTextIfttt(title, body);
  }

  @Get('/ifttt')
  public sendTextIfttt(
    @Query('title') title: string,
    @Query('body') body?: string,
  ): string {
    if (!body) {
      this.ifttt
        .trigger('notify', { value1: title, value2: '' })
        .catch(function(err) {
          console.error(err);
        });
    } else {
      this.ifttt
        .trigger('notify', { value1: title, value2: body })
        .catch(function(err) {
          console.error(err);
        });
    }

    console.log('message send');

    return 'OK';
  }
}
