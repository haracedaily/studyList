using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


// cs => 0, 1(binary)
// 컴파일러
// 컴파일은 컴퓨터가 이해할 수 있는 언어로 변환하는 것
// 즉, 2진수로 변환하는 것

// 0,1 => 사람이 아는 언어 즉, cs로 변경
// 디컴파일러
// 디컴파일은 컴퓨터가 이해하는 언어를 사람이 이해할 수 있는 언어로 변환하는 것


namespace conApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //32bit에서는 큰 숫자를 표현할 수 없다.
            // int는 6553535까지 표현가능
            //int a = int.TryParse(12812837912837, ); //불가능
            // long은 9223372036854775807까지 표현가능
            long b = 12812837912837;
            //long b = 12812837912837L; // 명시해도 되고 명시 안해도 됨
            int a = (int)b; //데이터 소실 발생
            //int 32bit => 4byte, 가장 빠르게 연산된다. gpu,cpu etc
            //long 64bit
            Console.WriteLine(a);
            Console.WriteLine(b);
            //즉 초과하는 값에 대하여서 컴파일 에러 발생
            //
            //묵시적 형변환은 큰 용량을 작은 용량으로 변환 때는 제한
            //작은 용량을 큰 용량에 넣을때는 가능
            //명시적형변환은 큰용량에서 작은용량으로 변환할때

            // 암묵적 형변환 (implicit casting)
            int c = 12127389;
            long d = c;

            //명시적 형변환(Explicit Casting)
            long e = 121273833339L;
            int f = (int)e;

            AA z = new BB();
            AA aA = new AA();
            z.Test();
            aA.Test();
        }
    }
    class AA
    {
        public virtual void Test()
        {
            Console.WriteLine("AA클래스의 test 메서드");
        }
    }
    class BB : AA
    {
        public override void Test()
        {
            Console.WriteLine("BB클래스의 test 메서드");
        }
    }
}
