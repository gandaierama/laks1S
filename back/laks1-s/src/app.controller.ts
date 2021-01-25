import { Controller, Get, Res, HttpStatus, Query } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/status')
  getStatus(): any {
	    return this.appService.getStatus(); // <= this sends response data as json

  }
}
