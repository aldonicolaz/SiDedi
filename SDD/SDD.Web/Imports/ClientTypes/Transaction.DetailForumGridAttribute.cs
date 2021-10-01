using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SDD.Transaction
{
    public partial class DetailForumGridAttribute : CustomEditorAttribute
    {
        public const string Key = "SDD.Transaction.DetailForumGrid";

        public DetailForumGridAttribute()
            : base(Key)
        {
        }
    }
}

