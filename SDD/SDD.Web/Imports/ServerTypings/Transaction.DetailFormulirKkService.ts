namespace SDD.Transaction {
    export namespace DetailFormulirKkService {
        export const baseUrl = 'Transaction/DetailFormulirKk';

        export declare function Create(request: Serenity.SaveRequest<DetailFormulirKkRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DetailFormulirKkRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailFormulirKkRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailFormulirKkRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transaction/DetailFormulirKk/Create",
            Update = "Transaction/DetailFormulirKk/Update",
            Delete = "Transaction/DetailFormulirKk/Delete",
            Retrieve = "Transaction/DetailFormulirKk/Retrieve",
            List = "Transaction/DetailFormulirKk/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DetailFormulirKkService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

