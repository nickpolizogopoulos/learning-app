import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { ToolsService } from './tools.service';

@Injectable()
export class ToolsInterceptor implements HttpInterceptor {

  constructor(
    private toolsService:ToolsService,
  ) { }

  message:string = `Interceptor: "Your request is being processed..."`;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ) {    
    this.toolsService.message = this.message;
    return next.handle(request);
  }
}
