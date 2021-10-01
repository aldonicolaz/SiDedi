namespace SDD.View {
    export namespace ViewAllPenghasilanService {
        export const baseUrl = 'View/ViewAllPenghasilan';

        export declare function Create(request: Serenity.SaveRequest<ViewAllPenghasilanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ViewAllPenghasilanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewAllPenghasilanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewAllPenghasilanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "View/ViewAllPenghasilan/Create",
            Update = "View/ViewAllPenghasilan/Update",
            Delete = "View/ViewAllPenghasilan/Delete",
            Retrieve = "View/ViewAllPenghasilan/Retrieve",
            List = "View/ViewAllPenghasilan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>ViewAllPenghasilanService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

