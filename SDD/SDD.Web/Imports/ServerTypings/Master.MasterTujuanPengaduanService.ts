namespace SDD.Master {
    export namespace MasterTujuanPengaduanService {
        export const baseUrl = 'Master/MasterTujuanPengaduan';

        export declare function Create(request: Serenity.SaveRequest<MasterTujuanPengaduanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MasterTujuanPengaduanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterTujuanPengaduanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterTujuanPengaduanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Master/MasterTujuanPengaduan/Create",
            Update = "Master/MasterTujuanPengaduan/Update",
            Delete = "Master/MasterTujuanPengaduan/Delete",
            Retrieve = "Master/MasterTujuanPengaduan/Retrieve",
            List = "Master/MasterTujuanPengaduan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MasterTujuanPengaduanService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

