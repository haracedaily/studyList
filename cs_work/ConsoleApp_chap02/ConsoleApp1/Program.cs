using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("안녕하세요");
            Console.WriteLine("wh...");
            String a = Console.ReadLine();
            Console.WriteLine(a);
            for (int i = 0; i < a.Length; i++)
            {
                Console.WriteLine("음절=" + a[i]);
            }
            int b = 10;
            
            for (int i = 0; i <= 10; i++)
            {
                b += i;
                Console.WriteLine("b=" + b);
            }
            Console.WriteLine(57 > 263);
            Console.WriteLine(263 > 57);
            //단축키
            // ctrl + a 모두 선택
            // ctrl + k + d 코드 정리
            // ctrl + k + c 주석
            // ctrl + k + u 주석 해제
            // ctrl + f5 디버깅 없이 실행
            Boolean isTrue = true;
            bool isFalse = false;
            Console.WriteLine(isTrue);
            Console.WriteLine(isFalse);
        }
    }
}
