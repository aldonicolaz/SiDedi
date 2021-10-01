namespace SDD.Transaction {
    export namespace MasterFlowFormulirService {
        export const baseUrl = 'Transaction/MasterFlowFormulir';

        export declare function Create(request: Serenity.SaveRequest<MasterFlowFormulirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MasterFlowFormulirRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MasterFlowFormulirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MasterFlowFormulirRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transaction/MasterFlowFormulir/Create",
            Update = "Transaction/MasterFlowFormulir/Update",
            Delete = "Transaction/MasterFlowFormulir/Delete",
            Retrieve = "Transaction/MasterFlowFormulir/Retrieve",
            List = "Transaction/MasterFlowFormulir/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>MasterFlowFormulirService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

