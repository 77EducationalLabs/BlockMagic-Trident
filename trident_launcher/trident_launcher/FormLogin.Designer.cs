
namespace trident_launcher
{
    partial class FormLogin
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;
        ///groupBox
        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(FormLogin));
            login = new Button();
            emailText = new TextBox();
            passwordText = new TextBox();
            password = new Label();
            Email = new Label();
            loginBox = new PictureBox();
            ((System.ComponentModel.ISupportInitialize)loginBox).BeginInit();
            SuspendLayout();
            // 
            // login
            // 
            login.BackColor = Color.FromArgb(240, 0, 0, 0);
            login.Cursor = Cursors.Hand;
            login.FlatAppearance.BorderSize = 0;
            login.FlatStyle = FlatStyle.Flat;
            login.ForeColor = Color.White;
            login.Location = new Point(380, 366);
            login.Name = "login";
            login.Size = new Size(289, 61);
            login.TabIndex = 4;
            login.Text = "Logar";
            login.UseMnemonic = false;
            login.UseVisualStyleBackColor = false;
            login.Click += login_ClickAsync;
            // 
            // emailText
            // 
            emailText.Location = new Point(380, 221);
            emailText.Name = "emailText";
            emailText.Size = new Size(289, 23);
            emailText.TabIndex = 0;
            emailText.TextChanged += emailText_TextChanged;
            // 
            // passwordText
            // 
            passwordText.Location = new Point(380, 292);
            passwordText.Name = "passwordText";
            passwordText.Size = new Size(289, 23);
            passwordText.TabIndex = 1;
            passwordText.UseSystemPasswordChar = true;
            // 
            // password
            // 
            password.AutoSize = true;
            password.ForeColor = Color.White;
            password.Location = new Point(380, 274);
            password.Name = "password";
            password.Size = new Size(39, 15);
            password.TabIndex = 3;
            password.Text = "Senha";
            password.Click += password_Click;
            // 
            // Email
            // 
            Email.AccessibleRole = AccessibleRole.None;
            Email.AutoSize = true;
            Email.ForeColor = Color.White;
            Email.Location = new Point(380, 203);
            Email.Name = "Email";
            Email.Size = new Size(36, 15);
            Email.TabIndex = 2;
            Email.Text = "Email";
            Email.Click += Email_Click;
            // 
            // loginBox
            // 
            loginBox.BackColor = Color.FromArgb(190, 0, 0, 0);
            loginBox.Location = new Point(292, 153);
            loginBox.Name = "loginBox";
            loginBox.Size = new Size(456, 353);
            loginBox.TabIndex = 1;
            loginBox.TabStop = false;
            loginBox.Click += loginBox_Click;
            // 
            // FormLogin
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            AutoSize = true;
            BackColor = Color.Black;
            BackgroundImage = (Image)resources.GetObject("$this.BackgroundImage");
            BackgroundImageLayout = ImageLayout.Center;
            ClientSize = new Size(1016, 679);
            Controls.Add(passwordText);
            Controls.Add(login);
            Controls.Add(emailText);
            Controls.Add(password);
            Controls.Add(Email);
            Controls.Add(loginBox);
            Cursor = Cursors.No;
            ForeColor = Color.White;
            FormBorderStyle = FormBorderStyle.FixedSingle;
            Icon = (Icon)resources.GetObject("$this.Icon");
            MaximizeBox = false;
            MaximumSize = new Size(1032, 718);
            MinimumSize = new Size(1032, 718);
            Name = "FormLogin";
            RightToLeftLayout = true;
            ShowIcon = false;
            Text = "Login Trident";
            Load += FormLogin_Load;
            ((System.ComponentModel.ISupportInitialize)loginBox).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion
        private Button login;
        private TextBox emailText;
        private TextBox passwordText;
        private Label password;
        private Label Email;
        private PictureBox loginBox;
    }
}