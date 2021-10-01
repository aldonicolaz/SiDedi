using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SDD.Administration
{
    public partial class PendidikanAttribute : CustomEditorAttribute
    {
        public const string Key = "SDD.Administration.Pendidikan";

        public PendidikanAttribute()
            : base(Key)
        {
        }
    }
}

