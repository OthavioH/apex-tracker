export class PageState {}

export class LoadingState extends PageState {}

export class ErrorState extends PageState {
    message: string;
    
    constructor (message: string) {
        super();
        this.message = message;
    }
}