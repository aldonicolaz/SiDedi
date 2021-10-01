namespace SDD.Master {
    export namespace MasterBudidayaService {
        export const baseUrl = 'Master/MasterBudidaya';

        export declare function Create(request: Serenity.SaveRequest<MasterBudidayaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MasterBudidayaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterBudidayaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterBudidayaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetListMasterBudidaya(request: PostIdpekerjaan, onSuccess?: (response: ListTransactionMasterBudidaya) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetListHasilBudidaya(request: PostIdhasil, onSuccess?: (response: ListTransactionHasil) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListBudidaya(request: PostIdpekerjaan, onSuccess?: (response: ListTransaction) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Master/MasterBudidaya/Create",
            Update = "Master/MasterBudidaya/Update",
            Delete = "Master/MasterBudidaya/Delete",
            Retrieve = "Master/MasterBudidaya/Retrieve",
            List = "Master/MasterBudidaya/List",
            GetListMasterBudidaya = "Master/MasterBudidaya/GetListMasterBudidaya",
            GetListHasilBudidaya = "Master/MasterBudidaya/GetListHasilBudidaya",
            ListBudidaya = "Master/MasterBudidaya/ListBudidaya"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetListMasterBudidaya', 
            'GetListHasilBudidaya', 
            'ListBudidaya'
        ].forEach(x => {
            (<any>MasterBudidayaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

