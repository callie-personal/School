namespace Basic_Delegates
{
    public delegate string MyDelegate(int arg1, int arg2);

    public class Program
    {
      static string Func1(int a, int b)
        {
            return (a + b).ToString();
        }
        
    static string Func2(int a, int b)
        {
            return (a * b).ToString();
        }

        static void Main(string[] args)
        {
            MyDelegate f = Func1;
            Console.WriteLine("The number from adding is: " + f(10, 20));

            f = Func2;
            Console.WriteLine("The number from multiplying is: " + f(10, 20));

            MyClass mc = new MyClass();

            f = mc.InstanceMethod1;
            Console.WriteLine("The number from using the MyClass method: " + f(10, 20));

        }
    }
}