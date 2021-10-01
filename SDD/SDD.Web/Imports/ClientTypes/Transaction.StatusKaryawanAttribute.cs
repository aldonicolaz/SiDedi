using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SDD.Transaction
{
    public partial class StatusKaryawanAttribute : CustomEditorAttribute
    {
        public const string Key = "SDD.Transaction.StatusKaryawan";

        public StatusKaryawanAttribute()
            : base(Key)
        {
        }
    }
}

