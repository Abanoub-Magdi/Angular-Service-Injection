import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
    constructor(private loggingService: LoggingService) { }
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Test Account',
            status: 'active'
        },
        {
            name: 'Hidden Account',
            status: 'active'
        }
    ]

    addAcount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.loggingStatusChanged(status);

    }
    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.loggingStatusChanged(status);

    }

}