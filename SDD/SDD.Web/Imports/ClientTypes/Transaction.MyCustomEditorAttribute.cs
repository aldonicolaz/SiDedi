using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace SDD.Transaction
{
    public partial class MyCustomEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "SDD.Transaction.MyCustomEditor";

        public MyCustomEditorAttribute()
            : base(Key)
        {
        }

        public object Cols
        {
            get { return GetOption<object>("cols"); }
            set { SetOption("cols", value); }
        }

        public object Rows
        {
            get { return GetOption<object>("rows"); }
            set { SetOption("rows", value); }
        }
    }
}

