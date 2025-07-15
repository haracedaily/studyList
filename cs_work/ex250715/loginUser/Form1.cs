using MaterialSkin;
using MaterialSkin.Controls;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace loginUser
{
    public partial class Form1 : MaterialForm
    {
        public Form1()
        {
            InitializeComponent();
            
            var materialSkinManager = MaterialSkinManager.Instance;
            materialSkinManager.AddFormToManage(this);
            materialSkinManager.Theme = MaterialSkinManager.Themes.LIGHT;
            materialSkinManager.ColorScheme = new ColorScheme(Primary.BlueGrey800, Primary.BlueGrey900, Primary.BlueGrey500, Accent.LightBlue200, TextShade.WHITE);

            label1.Font = new Font("맑은 고딕",20,FontStyle.Bold);
            label2.Font = new Font("맑은 고딕", 20, FontStyle.Bold);
            label3.Font = new Font("맑은 고딕", 20, FontStyle.Bold);

            button1.Font = new Font("맑은 고딕", 12, FontStyle.Regular);
            button2.Font = new Font("맑은 고딕", 12, FontStyle.Regular);
            button3.Font = new Font("맑은 고딕", 12, FontStyle.Regular);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            registerPanel.BringToFront();
            loginPanel.SendToBack();
            myPagePanel.SendToBack();
        }

        private void myPagePanel_Paint(object sender, PaintEventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            loginPanel.BringToFront();
            registerPanel.SendToBack();
            myPagePanel.SendToBack();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            myPagePanel.BringToFront();
            registerPanel.SendToBack();
            loginPanel.SendToBack();
        }

        private void label4_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void label6_Click(object sender, EventArgs e)
        {

        }

        private async void button4_Click(object sender, EventArgs e)
        {
            MessageBox.Show($"textbox1.Text {textBox1.Text}");

            var email = textBox1.Text;
            var password = textBox2.Text;
            var nickname = textBox3.Text;

            HttpClient client = new HttpClient();

            var content = new StringContent($"{{\"email\":\"{email}\", \"password\":\"{password}\", \"nickname\":\"{nickname}\"}}", Encoding.UTF8, "application/json");

            var response = await client.PostAsync("http://localhost:4040/user/register", content);

            var json = new StringContent($"{{\"email\":\"{email}\", \"password\":\"{password}\", \"nickname\":\"{nickname}\"}}",
                Encoding.UTF8, "application/json");

            Console.WriteLine(response);
            Console.WriteLine(json);

            MessageBox.Show("회원가입하였습니다.");

        }
    }
}
