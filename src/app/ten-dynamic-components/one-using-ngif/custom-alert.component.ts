import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-custom-alert',
    template: `
    
    <div class="backdrop" (click)="onClose()"></div>
    <div class="alert-box">
        <h2 class="text-danger"><em>"{{ message }}"</em></h2>
        <p class="lead text-danger"><em>"{{ quote }}"</em></p>
        <div class="alert-box-actions">
            <a class="text-danger cursor-pointer" (click)="onClose()">close</a>
        </div>
    </div>
    
    `,
    styles: [`
    
        .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #00000085;
        z-index: 50;
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(2px);
        }
        .alert-box {
            position: fixed;
            top: 30vh;
            left: 20vw;
            width: 60vw;
            padding: 20px 40px 30px;
            z-index: 100;
            background: rgb(255, 222, 225);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            border: 1px solid rgb(255, 153, 153);
            border-radius: 5px;
        }
        .alert-box-actions {
            text-align: right;
        }
    
    `]
})
export class CustomAlertComponent {

    @Input() message!:string | null;
    @Input() quote!:string | null;
    @Output() close = new EventEmitter <void> ();

    onClose():void {
        this.close.emit();
    }
}