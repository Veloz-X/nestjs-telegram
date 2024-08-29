import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('CreateNotification')
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.appService.createNotification(createNotificationDto.content);
  }
}
