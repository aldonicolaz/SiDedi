namespace SDD.Transaction {
    export namespace UserPerikananPeternakanService {
        export const baseUrl = 'Transaction/UserPerikananPeternakan';

        export declare function Create(request: Serenity.SaveRequest<UserPerikananPeternakanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<UserPerikananPeternakanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserPerikananPeternakanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserPerikananPeternakanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transaction/UserPerikananPeternakan/Create",
            Update = "Transaction/UserPerikananPeternakan/Update",
            Delete = "Transaction/UserPerikananPeternakan/Delete",
            Retrieve = "Transaction/UserPerikananPeternakan/Retrieve",
            List = "Transaction/UserPerikananPeternakan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>UserPerikananPeternakanService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

