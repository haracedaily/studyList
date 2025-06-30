using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Winform
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string message = "hello, world!";
            int number = message.Length;
            MessageBox.Show($"number = {number}");
            int a = 10;
            a.CompareTo( number );
            MessageBox.Show(a.CompareTo(number).ToString());

        }

        private void button2_Click(object sender, EventArgs e)
        {
            MessageBox.Show(tb1.Text);//화면에서 값 가져오기
            tb1.Text = "Hello, World!";//화면에 값 설정하기
            td.Text = tb1.Text.ToUpper();
            td2.Text = tb1.Text.ToLower();

            tb1.Text = tb1.Text.Replace("World", "cat");
        }

        private void btn3_Click(object sender, EventArgs e)
        {
            try
            {

                string result = int.Parse(tb_number.Text) % 2 == 0 ? "짝수입니다." : "홀수입니다.";
                MessageBox.Show($"'result' = {result}");
            }
            catch (Exception ex)
            {
                MessageBox.Show("숫자를 입력해주세요.");
            }
            //Boolean res = int.Parse(result)%2==0;
            //if (res)
            //{
            //    tb_number.Text = "짝수입니다.";
            //}else if (res)
            //{
            //    tb_number.Text = "홀수입니다.";
            //}
        }

        private void btn4_Click(object sender, EventArgs e)
        {
            try
            {

                int score = int.Parse(tb_score.Text);
                MessageBox.Show($"score = {score}");

                if (score >= 0 || score <= 100)
                {
                    string result = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
                    MessageBox.Show($"점수는 {result}학점입니다.");
                }


            }
            catch (Exception ex)
            {
                MessageBox.Show($"숫자를 입력하세요.");
            }
            finally
            {
                MessageBox.Show("점수 계산이 완료 되었습니다.");
            }
        }
    }
}
