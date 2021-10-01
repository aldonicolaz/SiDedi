namespace SDD.View {
    export namespace ViewProfilUserService {
        export const baseUrl = 'View/ViewProfilUser';

        export declare function Create(request: Serenity.SaveRequest<ViewProfilUserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<ViewProfilUserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ViewProfilUserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ViewProfilUserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function CekUser(request: PostIdUser, onSuccess?: (response: StatusResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "View/ViewProfilUser/Create",
            Update = "View/ViewProfilUser/Update",
            Delete = "View/ViewProfilUser/Delete",
            Retrieve = "View/ViewProfilUser/Retrieve",
            List = "View/ViewProfilUser/List",
            CekUser = "View/ViewProfilUser/CekUser"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'CekUser'
        ].forEach(x => {
            (<any>ViewProfilUserService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

