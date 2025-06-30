using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("안녕하세요");
            Console.WriteLine("이름을 입력하세요");
            string name = Console.ReadLine();
            Console.WriteLine("나이를 입력하세요");
            int age = int.Parse(Console.ReadLine());
            Console.WriteLine($"이름 {name} 나이 {age}");
            string a = 123 + "";
            string b = 123.ToString();
            string c = Convert.ToString(123);
            string d = $"{123}";
            string e = string.Format("{0}", 123);

            AA aa = new AA();
            aa.doA();
            //AA.doA(); // static이 아니기 때문에 호출불가
            AA.doB(); // static이기 떄문에 호출가능

            string numberString = "52273";
            int output = int.Parse(numberString);
            Console.WriteLine(output);
            Console.WriteLine(numberString);
            
        }
    }
}
