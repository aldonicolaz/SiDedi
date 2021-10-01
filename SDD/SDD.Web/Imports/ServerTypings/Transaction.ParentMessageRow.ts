namespace SDD.Transaction {
    export interface ParentMessageRow {
        IdParentMessage?: number;
        Message?: string;
        Title?: string;
        Body?: string;
        TimeStamp?: string;
        Option1?: number;
        Option2?: number;
        Detail?: FcmMessageRow[];
        IdUserShare?: number;
        DisplayName?: string;
    }

    export namespace ParentMessageRow {
        export const idProperty = 'IdParentMessage';
        export const nameProperty = 'Message';
        export const localTextPrefix = 'Transaction.ParentMessage';
        export const deletePermission = 'Transaction:ParentMessage';
        export const insertPermission = 'Transaction:ParentMessage';
        export const readPermission = 'Transaction:ParentMessage';
        export const updatePermission = 'Transaction:ParentMessage';

        export declare const enum Fields {
            IdParentMessage = "IdParentMessage",
            Message = "Message",
            Title = "Title",
            Body = "Body",
            TimeStamp = "TimeStamp",
            Option1 = "Option1",
            Option2 = "Option2",
            Detail = "Detail",
            IdUserShare = "IdUserShare",
            DisplayName = "DisplayName"
        }
    }
}

