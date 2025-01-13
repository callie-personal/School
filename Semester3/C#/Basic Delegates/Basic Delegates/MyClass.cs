using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basic_Delegates
{
    internal class MyClass
    {
        public MyClass()
        {

        }
        public string InstanceMethod1(int arg1, int arg2)
        {
            return (arg1 + arg2).ToString();
        }
    }
}
