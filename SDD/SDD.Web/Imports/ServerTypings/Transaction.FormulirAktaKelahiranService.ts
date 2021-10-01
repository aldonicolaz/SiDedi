namespace SDD.Transaction {
    export namespace FormulirAktaKelahiranService {
        export const baseUrl = 'Transaction/FormulirAktaKelahiran';

        export declare function Create(request: Serenity.SaveRequest<FormulirAktaKelahiranRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<FormulirAktaKelahiranRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<FormulirAktaKelahiranRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<FormulirAktaKelahiranRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Transaction/FormulirAktaKelahiran/Create",
            Update = "Transaction/FormulirAktaKelahiran/Update",
            Delete = "Transaction/FormulirAktaKelahiran/Delete",
            Retrieve = "Transaction/FormulirAktaKelahiran/Retrieve",
            List = "Transaction/FormulirAktaKelahiran/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>FormulirAktaKelahiranService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

