namespace SDD.Master {
    export namespace MasterHasilBudidayaService {
        export const baseUrl = 'Master/MasterHasilBudidaya';

        export declare function Create(request: Serenity.SaveRequest<MasterHasilBudidayaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MasterHasilBudidayaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterHasilBudidayaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterHasilBudidayaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Master/MasterHasilBudidaya/Create",
            Update = "Master/MasterHasilBudidaya/Update",
            Delete = "Master/MasterHasilBudidaya/Delete",
            Retrieve = "Master/MasterHasilBudidaya/Retrieve",
            List = "Master/MasterHasilBudidaya/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MasterHasilBudidayaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

