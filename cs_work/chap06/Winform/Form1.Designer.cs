namespace Winform
{
    partial class Form1
    {
        /// <summary>
        /// 필수 디자이너 변수입니다.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 사용 중인 모든 리소스를 정리합니다.
        /// </summary>
        /// <param name="disposing">관리되는 리소스를 삭제해야 하면 true이고, 그렇지 않으면 false입니다.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form 디자이너에서 생성한 코드

        /// <summary>
        /// 디자이너 지원에 필요한 메서드입니다. 
        /// 이 메서드의 내용을 코드 편집기로 수정하지 마세요.
        /// </summary>
        private void InitializeComponent()
        {
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.tb1 = new System.Windows.Forms.TextBox();
            this.td = new System.Windows.Forms.Label();
            this.td2 = new System.Windows.Forms.Label();
            this.btn3 = new System.Windows.Forms.Button();
            this.tb_number = new System.Windows.Forms.TextBox();
            this.tb_score = new System.Windows.Forms.TextBox();
            this.btn4 = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("굴림", 24F);
            this.button1.Location = new System.Drawing.Point(308, 12);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(186, 58);
            this.button1.TabIndex = 0;
            this.button1.Text = "button1";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // button2
            // 
            this.button2.Font = new System.Drawing.Font("굴림", 24F);
            this.button2.Location = new System.Drawing.Point(293, 77);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(201, 73);
            this.button2.TabIndex = 1;
            this.button2.Text = "button2";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // tb1
            // 
            this.tb1.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.tb1.Font = new System.Drawing.Font("굴림", 24F);
            this.tb1.Location = new System.Drawing.Point(12, 94);
            this.tb1.Name = "tb1";
            this.tb1.Size = new System.Drawing.Size(275, 37);
            this.tb1.TabIndex = 2;
            // 
            // td
            // 
            this.td.AutoSize = true;
            this.td.Font = new System.Drawing.Font("굴림", 24F);
            this.td.Location = new System.Drawing.Point(12, 178);
            this.td.Name = "td";
            this.td.Size = new System.Drawing.Size(110, 32);
            this.td.TabIndex = 3;
            this.td.Text = "대문자";
            // 
            // td2
            // 
            this.td2.AutoSize = true;
            this.td2.Font = new System.Drawing.Font("굴림", 24F);
            this.td2.Location = new System.Drawing.Point(12, 240);
            this.td2.Name = "td2";
            this.td2.Size = new System.Drawing.Size(110, 32);
            this.td2.TabIndex = 4;
            this.td2.Text = "소문자";
            // 
            // btn3
            // 
            this.btn3.Font = new System.Drawing.Font("굴림", 24F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.btn3.Location = new System.Drawing.Point(243, 311);
            this.btn3.Name = "btn3";
            this.btn3.Size = new System.Drawing.Size(149, 75);
            this.btn3.TabIndex = 5;
            this.btn3.Text = "button3";
            this.btn3.UseVisualStyleBackColor = true;
            this.btn3.Click += new System.EventHandler(this.btn3_Click);
            // 
            // tb_number
            // 
            this.tb_number.Location = new System.Drawing.Point(88, 326);
            this.tb_number.Name = "tb_number";
            this.tb_number.Size = new System.Drawing.Size(116, 21);
            this.tb_number.TabIndex = 6;
            // 
            // tb_score
            // 
            this.tb_score.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.tb_score.Font = new System.Drawing.Font("굴림", 24F);
            this.tb_score.Location = new System.Drawing.Point(3, 439);
            this.tb_score.Name = "tb_score";
            this.tb_score.Size = new System.Drawing.Size(275, 37);
            this.tb_score.TabIndex = 8;
            // 
            // btn4
            // 
            this.btn4.Font = new System.Drawing.Font("굴림", 24F);
            this.btn4.Location = new System.Drawing.Point(284, 422);
            this.btn4.Name = "btn4";
            this.btn4.Size = new System.Drawing.Size(201, 73);
            this.btn4.TabIndex = 7;
            this.btn4.Text = "button4";
            this.btn4.UseVisualStyleBackColor = true;
            this.btn4.Click += new System.EventHandler(this.btn4_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(784, 861);
            this.Controls.Add(this.tb_score);
            this.Controls.Add(this.btn4);
            this.Controls.Add(this.tb_number);
            this.Controls.Add(this.btn3);
            this.Controls.Add(this.td2);
            this.Controls.Add(this.td);
            this.Controls.Add(this.tb1);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.TextBox tb1;
        private System.Windows.Forms.Label td;
        private System.Windows.Forms.Label td2;
        private System.Windows.Forms.Button btn3;
        private System.Windows.Forms.TextBox tb_number;
        private System.Windows.Forms.TextBox tb_score;
        private System.Windows.Forms.Button btn4;
    }
}

