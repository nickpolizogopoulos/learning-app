import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

import { EightHttpRequestsComponent } from "./eight-http-requests.component";
import { FourInterceptorComponent } from "./four-interceptor/four-interceptor.component";
import { ToolsInterceptor } from "./four-interceptor/tools.interceptor";
import { OneGetRequestComponent } from "./one-get-request/one-get-request.component";
import { ThreeErrorHandlingComponent } from "./three-error-handling/three-error-handling.component";
import { TwoPostRequestComponent } from "./two-post-request/two-post-request.component";

@NgModule({
    declarations: [
        EightHttpRequestsComponent,
        OneGetRequestComponent,
        TwoPostRequestComponent,
        ThreeErrorHandlingComponent,
        FourInterceptorComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ToolsInterceptor,
            multi: true
        },
        provideHttpClient(
            withInterceptorsFromDi()
        )
    ] 
})
export class HttpRequestsModule {}