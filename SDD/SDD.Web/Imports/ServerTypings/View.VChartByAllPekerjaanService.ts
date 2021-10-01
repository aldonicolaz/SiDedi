namespace SDD.View {
    export namespace VChartByAllPekerjaanService {
        export const baseUrl = 'View/VChartByAllPekerjaan';

        export declare function Create(request: Serenity.SaveRequest<VChartByAllPekerjaanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VChartByAllPekerjaanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VChartByAllPekerjaanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VChartByAllPekerjaanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "View/VChartByAllPekerjaan/Create",
            Update = "View/VChartByAllPekerjaan/Update",
            Delete = "View/VChartByAllPekerjaan/Delete",
            Retrieve = "View/VChartByAllPekerjaan/Retrieve",
            List = "View/VChartByAllPekerjaan/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>VChartByAllPekerjaanService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

