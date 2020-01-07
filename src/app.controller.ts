import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return 'Hello World!';
  }
  @Get('read')
  readAll() {
    const data = this.appService.readData();
    return data;
  }

  @Get('test')
  read() {
    const data = this.appService.getData();
    return data;
  }

  @Post('delete/:uuid')
  deleteOne(@Param('uuid') uuid) {
    const data = this.appService.deleteData(uuid);
    return data;
  }

  @Post('create')
  create(@Body() abc) {
    const data = this.appService.createData(abc);
    return data;
  }

  @Post('update/:uuid')
  update(
    @Body('id') id,
    @Body('name') name,
    @Body('age') age,
    @Param('uuid') uuid,
  ) {
    const data = this.appService.updateData(id, name, age, uuid);
    return data;
  }
}
