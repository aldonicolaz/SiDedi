namespace SDD.Master {
    export namespace MasterPropinsiService {
        export const baseUrl = 'Master/MasterPropinsi';

        export declare function Create(request: Serenity.SaveRequest<MasterPropinsiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MasterPropinsiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterPropinsiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterPropinsiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetListKabupaten(request: PostIdPropinsi, onSuccess?: (response: ListKabupaten) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetListKecamatan(request: PostIdKabupaten, onSuccess?: (response: ListKecamatan) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetListDesa(request: PostIdKecamatan, onSuccess?: (response: ListDesa) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Master/MasterPropinsi/Create",
            Update = "Master/MasterPropinsi/Update",
            Delete = "Master/MasterPropinsi/Delete",
            Retrieve = "Master/MasterPropinsi/Retrieve",
            List = "Master/MasterPropinsi/List",
            GetListKabupaten = "Master/MasterPropinsi/GetListKabupaten",
            GetListKecamatan = "Master/MasterPropinsi/GetListKecamatan",
            GetListDesa = "Master/MasterPropinsi/GetListDesa"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetListKabupaten', 
            'GetListKecamatan', 
            'GetListDesa'
        ].forEach(x => {
            (<any>MasterPropinsiService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

