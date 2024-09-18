export class LoggingService 
{
    loggingStatusChanged(status: string) {
        console.log(`Logging status changed to ${status}`);
    }
}