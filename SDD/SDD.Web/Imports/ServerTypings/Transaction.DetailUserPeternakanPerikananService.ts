namespace SDD.Transaction {
    export namespace DetailUserPeternakanPerikananService {
        export const baseUrl = 'Transaction/DetailUserPeternakanPerikanan';

        export declare function Create(request: Serenity.SaveRequest<DetailUserPeternakanPerikananRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DetailUserPeternakanPerikananRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailUserPeternakanPerikananRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailUserPeternakanPerikananRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transaction/DetailUserPeternakanPerikanan/Create",
            Update = "Transaction/DetailUserPeternakanPerikanan/Update",
            Delete = "Transaction/DetailUserPeternakanPerikanan/Delete",
            Retrieve = "Transaction/DetailUserPeternakanPerikanan/Retrieve",
            List = "Transaction/DetailUserPeternakanPerikanan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DetailUserPeternakanPerikananService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

