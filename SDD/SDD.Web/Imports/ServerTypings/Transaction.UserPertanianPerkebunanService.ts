namespace SDD.Transaction {
    export namespace UserPertanianPerkebunanService {
        export const baseUrl = 'Transaction/UserPertanianPerkebunan';

        export declare function Create(request: Serenity.SaveRequest<UserPertanianPerkebunanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UserPertanianPerkebunanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserPertanianPerkebunanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserPertanianPerkebunanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transaction/UserPertanianPerkebunan/Create",
            Update = "Transaction/UserPertanianPerkebunan/Update",
            Delete = "Transaction/UserPertanianPerkebunan/Delete",
            Retrieve = "Transaction/UserPertanianPerkebunan/Retrieve",
            List = "Transaction/UserPertanianPerkebunan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UserPertanianPerkebunanService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

