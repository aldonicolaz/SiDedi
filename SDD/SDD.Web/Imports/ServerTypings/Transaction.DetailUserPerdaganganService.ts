namespace SDD.Transaction {
    export namespace DetailUserPerdaganganService {
        export const baseUrl = 'Transaction/DetailUserPerdagangan';

        export declare function Create(request: Serenity.SaveRequest<DetailUserPerdaganganRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DetailUserPerdaganganRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailUserPerdaganganRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailUserPerdaganganRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transaction/DetailUserPerdagangan/Create",
            Update = "Transaction/DetailUserPerdagangan/Update",
            Delete = "Transaction/DetailUserPerdagangan/Delete",
            Retrieve = "Transaction/DetailUserPerdagangan/Retrieve",
            List = "Transaction/DetailUserPerdagangan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DetailUserPerdaganganService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

