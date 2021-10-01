namespace SDD.View {
    export namespace ViewTransaksiFormulirService {
        export const baseUrl = 'View/ViewTransaksiFormulir';

        export declare function Create(request: Serenity.SaveRequest<ViewTransaksiFormulirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ViewTransaksiFormulirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewTransaksiFormulirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewTransaksiFormulirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "View/ViewTransaksiFormulir/Create",
            Update = "View/ViewTransaksiFormulir/Update",
            Delete = "View/ViewTransaksiFormulir/Delete",
            Retrieve = "View/ViewTransaksiFormulir/Retrieve",
            List = "View/ViewTransaksiFormulir/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ViewTransaksiFormulirService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

