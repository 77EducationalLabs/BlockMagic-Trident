using System.Diagnostics;
using tridentCore;
using System.Drawing;


namespace trident_launcher
{
    public class TransparentTextBox : TextBox
    {
        public TransparentTextBox()
        {
            // Tornando a caixa de texto transparente
            SetStyle(ControlStyles.SupportsTransparentBackColor, true);
            BackColor = Color.Transparent;
        }

        protected override void OnPaintBackground(PaintEventArgs e)
        {
            // Não faz nada no fundo para que ele permaneça transparente
        }
    }
    partial class Trident
    {

        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            components = new System.ComponentModel.Container();
            TextBox textBox1;
            TextBox textBox2;
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Trident));
            contextMenuStrip1 = new ContextMenuStrip(components);
            LogonButton = new Button();
            pictureBox1 = new PictureBox();
            contextMenuStrip2 = new ContextMenuStrip(components);
            toolStripTextBox1 = new ToolStripTextBox();
            menuBox = new PictureBox();
            textBox1 = new TextBox();
            textBox2 = new TextBox();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).BeginInit();
            contextMenuStrip2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)menuBox).BeginInit();
            SuspendLayout();
            // 
            // textBox1
            // 
            textBox1.BackColor = Color.Black;
            textBox1.BorderStyle = BorderStyle.None;
            textBox1.Font = new Font("Cascadia Code", 15.75F, FontStyle.Regular, GraphicsUnit.Point, 0);
            textBox1.ForeColor = SystemColors.Window;
            textBox1.Location = new Point(365, 101);
            textBox1.Name = "textBox1";
            textBox1.Size = new Size(268, 25);
            textBox1.TabIndex = 12;
            textBox1.Text = "Bem vindo a Trident";
            textBox1.TextAlign = HorizontalAlignment.Center;
            textBox1.TextChanged += textBox1_TextChanged_2;
            // 
            // textBox2
            // 
            textBox2.BackColor = Color.Black;
            textBox2.BorderStyle = BorderStyle.None;
            textBox2.Font = new Font("Cascadia Code", 15.75F, FontStyle.Regular, GraphicsUnit.Point, 0);
            textBox2.ForeColor = SystemColors.Window;
            textBox2.Location = new Point(365, 252);
            textBox2.Name = "textBox2";
            textBox2.Size = new Size(268, 25);
            textBox2.TabIndex = 13;
            textBox2.Text = "Aplicação iniciada !";
            textBox2.TextAlign = HorizontalAlignment.Center;
            // 
            // contextMenuStrip1
            // 
            contextMenuStrip1.Name = "contextMenuStrip1";
            contextMenuStrip1.Size = new Size(61, 4);
            // 
            // LogonButton
            // 
            LogonButton.BackColor = Color.FromArgb(240, 0, 0, 0);
            LogonButton.FlatStyle = FlatStyle.Flat;
            LogonButton.ForeColor = SystemColors.Control;
            LogonButton.Location = new Point(916, 12);
            LogonButton.Name = "LogonButton";
            LogonButton.Size = new Size(66, 34);
            LogonButton.TabIndex = 9;
            LogonButton.Text = "Sair";
            LogonButton.UseVisualStyleBackColor = false;
            LogonButton.Visible = false;
            LogonButton.Click += LogonButton_Click;
            // 
            // pictureBox1
            // 
            pictureBox1.BackgroundImage = (Image)resources.GetObject("pictureBox1.BackgroundImage");
            pictureBox1.Location = new Point(0, -1);
            pictureBox1.Name = "pictureBox1";
            pictureBox1.Padding = new Padding(3);
            pictureBox1.Size = new Size(992, 542);
            pictureBox1.TabIndex = 10;
            pictureBox1.TabStop = false;
            // 
            // contextMenuStrip2
            // 
            contextMenuStrip2.Items.AddRange(new ToolStripItem[] { toolStripTextBox1 });
            contextMenuStrip2.Name = "contextMenuStrip2";
            contextMenuStrip2.Size = new Size(161, 29);
            // 
            // toolStripTextBox1
            // 
            toolStripTextBox1.Name = "toolStripTextBox1";
            toolStripTextBox1.Size = new Size(100, 23);
            // 
            // menuBox
            // 
            menuBox.BackColor = Color.Black;
            menuBox.Location = new Point(24, 52);
            menuBox.Name = "menuBox";
            menuBox.Size = new Size(932, 480);
            menuBox.TabIndex = 11;
            menuBox.TabStop = false;
            // 
            // Trident
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = SystemColors.ButtonHighlight;
            BackgroundImageLayout = ImageLayout.Zoom;
            ClientSize = new Size(992, 540);
            Controls.Add(textBox2);
            Controls.Add(textBox1);
            Controls.Add(menuBox);
            Controls.Add(LogonButton);
            Controls.Add(pictureBox1);
            Icon = (Icon)resources.GetObject("$this.Icon");
            MaximizeBox = false;
            MaximumSize = new Size(1008, 579);
            MinimumSize = new Size(1008, 579);
            Name = "Trident";
            Text = "Trident";
            TransparencyKey = Color.Gray;
            Load += Form1_Load;
            ((System.ComponentModel.ISupportInitialize)pictureBox1).EndInit();
            contextMenuStrip2.ResumeLayout(false);
            contextMenuStrip2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)menuBox).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button initApp;
        private TextBox emailText;
        private TextBox passwordText;
        private Label Email;
        private Label password;
        private Button login;
        private ContextMenuStrip contextMenuStrip1;
        private Button LogonButton;
        private PictureBox pictureBox1;
        private ContextMenuStrip contextMenuStrip2;
        private ToolStripTextBox toolStripTextBox1;
        private PictureBox menuBox;
        private TextBox textBox1;
    }
}
