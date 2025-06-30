using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            int number = 10;
            MessageBox.Show($"number = {number}");
            MessageBox.Show($"number = {number++}");
            MessageBox.Show($"number = {number--}");
            MessageBox.Show($"number = {number}");

        }

        private void button2_Click(object sender, EventArgs e)
        {
            string input = Console.ReadLine();
            MessageBox.Show($"input = {input}");
            //보통 인풋값을 가져오지 딱히 사용하지 않음
            //개발단계에서 테스트 용으로도.. 딱히 번거로워서 안씀
            //콘솔에서 입력 받고 그 값 핸들링하는 방법임.

            //MessageBox.Show("Test");
            //함수는 매개변수를 스트링으로 받기 때문에
            //string 타입으로 변환해야 사용 가능.

            //MessageBox.Show(!true);
            //즉 이렇게 boolean타입 바로 사용 불가능

            //그러므로 형변환을 해줘야지 사용 가능
            MessageBox.Show((!true).ToString());
            
            //typeof() number() string() 빌트인 함수


        }

        private void button3_Click(object sender, EventArgs e)
        {
            // 함수명은 동일하지만, 서로 다른 함수 호출
            doA();
            doA(100);
            doA(100, 200);
            doA("Hello");
            //doA중 매개변수로 불타입을 받아주는 곳이 없음으로 사용 불가
            //doA(true);
        }

        // 동일한 함수명으로 선언한 경우
        // 매개변수의 개수나 타입을 다르게 선언하면 됨
        // 함수 오버로딩이라고 합니다.
        public void doA()
        {
            MessageBox.Show("doA() 함수");
        }

        public void doA(int aa)
        {
            MessageBox.Show($"doA() 함수 aa={aa}");
        }

        public void doA(int aa, int bb)
        {
            MessageBox.Show($"doA() 함수 aa = {aa}, bb={bb}");
        }

        public void doA(string cc)
        {
            MessageBox.Show($"doA() 함수 cc={cc}");
        }
    }
}
