import {
    Component,
    EventEmitter,
    Input,
    Output
} from "@angular/core";

@Component({
    selector: 'app-prog-alert',
    template: `
    
        <div class="backdrop" (click)="onClose()"></div>
        <div class="alert-box">
            <p class="lead">"{{ message }}"</p>
            <div class="alert-box-actions">
                <button class="btn btn-sm btn-danger rounded-1" (click)="onClose()">close</button>
            </div>
        </div>

    `,
    styles: `

        .backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.75);
            z-index: 50;
        }

        .alert-box {
            position: fixed;
            top: 30vh;
            left: 20vw;
            width: 60vw;
            padding: 20px;
            z-index: 100;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        }

        .alert-box-actions {
            text-align: right;
        }
    
    `
})
export class ProgAlertComponent {

    @Input() message?: string;
    @Output() close = new EventEmitter<void>();

    onClose(): void {
        this.close.emit();
    }    

}