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
        int num = 10;
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            num += 1;
            Console.WriteLine(num);
            //MessageBox.Show(num.ToString());
            if(textBox1.Text != "")
            {
                num = int.Parse(textBox1.Text);
                textBox1.Text = "";
                num++;
                label3.Text = num.ToString();
            }
            else
            {
                label3.Text = num.ToString();
            }
        }

        private void label2_Click(object sender, EventArgs e)
        {
            Console.WriteLine("출력");
        }
    }
}
