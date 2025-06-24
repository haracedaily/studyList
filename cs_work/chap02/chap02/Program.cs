using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace chap02
{
    internal class Program
    {
        //프로그램 시작 시 항상 존재하는 함수나 변수에 static
        //window, global, self
        //function a(); => return 사용 가능
        // C# java => 반환값 명시
        // public static void main(String[] args){
        // }
        static void Main(string[] args)
        {
            Console.WriteLine("안녕");
            Console.WriteLine(32.GetType());
            Console.WriteLine(129L.GetType());
            Console.WriteLine(3.14f.GetType());
            Console.WriteLine(true.GetType());
            Console.WriteLine("안녕".GetType());
            Console.WriteLine('A'.GetType());
            Console.WriteLine("안녕".Length);
            Console.WriteLine("asf".ToUpper());
            Console.WriteLine("ASDd".ToLower());
            Console.WriteLine("안녕".Substring(1));

            int a = 10;
            double b = 3.14;
            float c = 3.14f;
            string d = "안녕하세요";
            bool e = true;
            char f = 'a';

            var g = 100; //var는 타입을 자동으로 추론합니다.
            Console.WriteLine(g.GetType());
        }
    }
}
