using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SDD.Transaction
{
    public partial class TypeKapalAttribute : CustomEditorAttribute
    {
        public const string Key = "SDD.Transaction.TypeKapal";

        public TypeKapalAttribute()
            : base(Key)
        {
        }
    }
}

