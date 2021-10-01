namespace SDD.Transaction {
    export namespace DetailAktaLahirService {
        export const baseUrl = 'Transaction/DetailAktaLahir';

        export declare function Create(request: Serenity.SaveRequest<DetailAktaLahirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<DetailAktaLahirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DetailAktaLahirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DetailAktaLahirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transaction/DetailAktaLahir/Create",
            Update = "Transaction/DetailAktaLahir/Update",
            Delete = "Transaction/DetailAktaLahir/Delete",
            Retrieve = "Transaction/DetailAktaLahir/Retrieve",
            List = "Transaction/DetailAktaLahir/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>DetailAktaLahirService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

