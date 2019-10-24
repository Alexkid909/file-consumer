import {ApiError} from "./apiError";

export class DatabaseError extends ApiError {
    constructor(message: string, friendlyMessages: Array<string>, data?: any) {
        super(message, 'Database Error', friendlyMessages, data);
    }
}