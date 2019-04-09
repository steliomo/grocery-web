import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Alert } from './alert';
import { AlertType } from './alert-type';
import { AlertService } from './alert.service';

@Component({
    selector: 'go-alert',
    templateUrl: 'alert.component.html'
})
export class AlertComponent implements OnInit, OnDestroy {
    
    @Input() timeout = 3000;
    alerts: Alert[] = [];
    icon: string; 
    
    constructor(private alertService: AlertService) { }
    
    ngOnInit() { 
        this.alertService
        .getAlert()
        .subscribe(alert => {
            
            if(!alert){
                this.alerts = [];
                return;
            }
            
            this.alerts.push(alert);
            setTimeout(() => this.removeAlert(alert), this.timeout);
        })
    }
    
    removeAlert(alert: Alert){
        this.alerts = this.alerts.filter( a => a != alert);
    }
    
    getAlertType(alert: Alert){
        
        if(!alert){
            this.icon = '';
            return '';
        }
        
        switch (alert.alertType) {
            case AlertType.SUCCESS:
            this.icon = 'fa fa-check-circle';
            return 'alert alert-success';
            
            case AlertType.DANGER:
            this.icon = 'fa fa-bomb';
            return 'alert alert-danger';
            
            case AlertType.WARNING:
            this.icon = 'fa fa-exclamation-triangle';
            return 'alert alert-warning';
            
            case AlertType.INFO:
            this.icon = 'fa fa-info-circle';
            return 'alert alert-info';
        }
    }
    
    ngOnDestroy(): void {
        this.alertService.destroy();
    }
}