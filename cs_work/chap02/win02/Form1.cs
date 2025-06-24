using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace win02
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            int num1 = int.Parse(textBox1.Text);
            int num2 = int.Parse(textBox2.Text);
            // int num1 = Convert.ToInt32(textBox1.Text);
            // int num1 = int.TryParse(textBox1.Text, out num1) ? num1 : 0;
            int a = 10;
            Console.WriteLine($"a = {a}");
            MessageBox.Show($"\"{num1 + num2}\"","더한값");
            //MessageBox.Show((int.Parse(textBox1.Text)+int.Parse(textBox2.Text)).ToString());
            //MessageBox.Show((num1+num2).ToString(), "더한값");
        }

        private void numericUpDown1_ValueChanged(object sender, EventArgs e)
        {

        }
    }
}
