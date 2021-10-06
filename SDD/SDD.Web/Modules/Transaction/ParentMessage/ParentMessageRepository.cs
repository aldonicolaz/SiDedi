
namespace SDD.Transaction.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using RestSharp;
    using MyRow = Entities.ParentMessageRow;
    using Newtonsoft.Json.Linq;
    using System.Linq;
    using SDD.Model;
    using Newtonsoft.Json;
    using System.Net;
    using System.Collections.Generic;

    public class ParentMessageRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> {
            protected override void BeforeSave()
            {
                base.BeforeSave();
                SiDedy_Default_v1Entities entities = new SiDedy_Default_v1Entities();
                var iduser = ((UserDefinition)Serenity.Authorization.UserDefinition).UserId;
                List<isiresul> listresult = new List<isiresul>();
                string urlfcm = "https://fcm.googleapis.com/fcm/send";
                string key = "key=AAAAfTG5U9w:APA91bHaqrgCmsQt_K0RLKbOZOZPdPSQC7nuyji9m88g1W_RhtfbWkihXBmG1-kN38VU7GefbEyJZ2DRwqaviTiyhmZ3pr8v35i-NC836U8z-8K0YbuyPgI4Vo_PkiQJARulJuyoyblW";
                Row.IdUserShare = iduser;
                Row.TimeStamp = DateTime.Now;
           
                    int detail = Row.Detail.Count;
                    if (detail > 0)
                    {
                        for (int y = 0; y < detail; y++)
                        {
                        Row.Detail[y].TimeStamp = DateTime.Now;
                       
                        Row.Detail[y].Title = Row.Title;
                        Row.Detail[y].Message = Row.Message;
                        Row.Detail[y].Body = Row.Body;
                        int user = (int)Row.Detail[y].IdUser;

                        string body = Row.Detail[y].Body;

                        Notification Notification_ = new Notification();
                        Notification_.body = body;

                        string fcmtoken = entities.Users.Where(p => p.UserId == user).ToList()[0].FcmToken;
                        RequestBody requestBody_ = new RequestBody();

                        requestBody_.to = fcmtoken;
                        requestBody_.notification = Notification_;
                        string sJSONResponseNew = JsonConvert.SerializeObject(requestBody_);

                        dynamic dynamicObjectNew = JsonConvert.DeserializeObject(sJSONResponseNew);
                        var reqnew = @"" + dynamicObjectNew;

                        var bnew = (string)reqnew.Replace("\r\n", "");

                 
                        string contentnew = bnew;

                    

                        var client = new RestClient(urlfcm);

                        var requestMessage = new RestRequest(Method.POST);

                        requestMessage.AddHeader("Content-Type", "application/json");
                     
                        requestMessage.AddHeader("Authorization", key);

                       requestMessage.AddParameter("application/json", contentnew, ParameterType.RequestBody);
                        ServicePointManager.ServerCertificateValidationCallback += (sender, certificate, chain, sslPolicyErrors) => true;
                        IRestResponse restResponse = client.Execute(requestMessage);
                        string response = restResponse.Content;
                        var jObject = JObject.Parse(restResponse.Content);
                        ResponMessage responstatus = new ResponMessage();
                        isiresul rest = new isiresul();

                        if (restResponse.StatusCode == HttpStatusCode.OK)
                        {
                            string responseFcm = restResponse.Content;
                           
                            responstatus = JsonConvert.DeserializeObject<ResponMessage>(responseFcm);


                            string sJSONResponseNew2 = JsonConvert.SerializeObject(responstatus);
                            int  sukses = responstatus.success;



                            dynamic dynamicObjectdatum = JsonConvert.DeserializeObject(sJSONResponseNew2);
                            var dt = @"" + dynamicObjectdatum;

                            var bd = (string)dt.Replace("\r\n", "");


                            string content = bd;

                            if (sukses==1)
                            {


                                Row.Detail[y].Status = 2;
                                Row.Detail[y].Response = content;
                            }
                            else
                            {

                                Row.Detail[y].Status = 3;
                                Row.Detail[y].Response = content;
                            }

                        }

                       

                        
                    }
                    }
                
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow> {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                var iduser = ((UserDefinition)Serenity.Authorization.UserDefinition).UserId;
                var iddesa = ((UserDefinition)Serenity.Authorization.UserDefinition).IdDesa;
                int RoleId = 0;
                try
                {
                    RoleId = ((UserDefinition)Serenity.Authorization.UserDefinition).Roles[0].RoleId;
                }
                catch (System.Exception e)
                {
                    RoleId = 0;
                }

                if (iduser == 1)
                {

                }
                else
                {

                    query.Where(fld.IdUserShare == iduser);



                }



            }
        }
    }

    public class Notification
    {
        public string body { get; set; }
      
    }

    public class ResponMessage
    {
        public string multicast_id { get; set; }
        public int success { get; set; }
        public int failurev { get; set; }
        public int canonical_ids { get; set; }
        public List<isiresul> results { get; set; }
    }


    public class isiresul
    {
        public string message_id { get; set; }
    }

    public class RequestBody
    {
        public string to { get; set; }
        public Notification notification { get; set; }
    }
}