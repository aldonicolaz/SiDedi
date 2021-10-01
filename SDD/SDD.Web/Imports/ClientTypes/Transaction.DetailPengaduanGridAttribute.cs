using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SDD.Transaction
{
    public partial class DetailPengaduanGridAttribute : CustomEditorAttribute
    {
        public const string Key = "SDD.Transaction.DetailPengaduanGrid";

        public DetailPengaduanGridAttribute()
            : base(Key)
        {
        }
    }
}

