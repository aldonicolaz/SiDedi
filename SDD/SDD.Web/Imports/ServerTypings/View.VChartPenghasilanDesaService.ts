namespace SDD.View {
    export namespace VChartPenghasilanDesaService {
        export const baseUrl = 'View/VChartPenghasilanDesa';

        export declare function Create(request: Serenity.SaveRequest<VChartPenghasilanDesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<VChartPenghasilanDesaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<VChartPenghasilanDesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<VChartPenghasilanDesaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListPdf(request: Serenity.ListRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function ListId(request: Serenity.ListRequest, onSuccess?: (response: System.String) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "View/VChartPenghasilanDesa/Create",
            Update = "View/VChartPenghasilanDesa/Update",
            Delete = "View/VChartPenghasilanDesa/Delete",
            Retrieve = "View/VChartPenghasilanDesa/Retrieve",
            List = "View/VChartPenghasilanDesa/List",
            ListPdf = "View/VChartPenghasilanDesa/ListPdf",
            ListId = "View/VChartPenghasilanDesa/ListId"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'ListPdf', 
            'ListId'
        ].forEach(x => {
            (<any>VChartPenghasilanDesaService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

