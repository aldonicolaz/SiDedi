
namespace SDD.Transaction.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Transaction.Banner")]
    [BasedOnRow(typeof(Entities.BannerRow), CheckNames = true)]
    public class BannerColumns
    {
        [EditLink, DisplayName("ID"), AlignCenter]
        public Int32 IdBanner { get; set; }

       // public String Image { get; set; }
        [Width(300)]
        public String DisplayName { get; set; }
        [Visible(false)]
        public Int32 IdUser { get; set; }
        [EditLink]
        [Width(150)]
        public GetTrackStatus StatusAktif { get; set; }
        [Width(300)]
        public String Description { get; set; }
        [Width(300)]
        public String UrlImage { get; set; }
    }
}