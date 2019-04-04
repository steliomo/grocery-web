import { AlertType } from './alert-type';

export class Alert {

    constructor(public readonly alertType: AlertType, public readonly message: string){
    }

}