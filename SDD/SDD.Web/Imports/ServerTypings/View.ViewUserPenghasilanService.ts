namespace SDD.View {
    export namespace ViewUserPenghasilanService {
        export const baseUrl = 'View/ViewUserPenghasilan';

        export declare function Create(request: Serenity.SaveRequest<ViewUserPenghasilanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ViewUserPenghasilanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewUserPenghasilanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewUserPenghasilanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListPekerjaanUser(request: PostUser, onSuccess?: (response: ListTransaction) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "View/ViewUserPenghasilan/Create",
            Update = "View/ViewUserPenghasilan/Update",
            Delete = "View/ViewUserPenghasilan/Delete",
            Retrieve = "View/ViewUserPenghasilan/Retrieve",
            List = "View/ViewUserPenghasilan/List",
            ListPekerjaanUser = "View/ViewUserPenghasilan/ListPekerjaanUser"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ListPekerjaanUser'
        ].forEach(x => {
            (<any>ViewUserPenghasilanService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

