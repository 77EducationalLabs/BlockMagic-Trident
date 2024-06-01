using System.Diagnostics;
using trident_launcher_pooling;
using tridentApi;
using trident_interfaces;
using tridentCore;
using System.Windows.Forms;
using System.Xml;
using System.ComponentModel;

namespace trident_launcher
{
    public partial class Trident : Form
    {
        List<Games> games;
        Thread pooling;
        private string nameProcess = "trident_launcher";
        private string token;

        public Trident(string token)
        {
            InitializeComponent();
            this.token = token;
            this.FormClosing += new FormClosingEventHandler(Trident_FormClosing);

        }

        private void Trident_FormClosing(object sender, FormClosingEventArgs e)
        {
            e.Cancel = true;
            this.WindowState = FormWindowState.Minimized;
        }

        protected override void OnFormClosing(FormClosingEventArgs e)
        {
            e.Cancel = true; // Cancela o fechamento do formulário
            this.WindowState = FormWindowState.Minimized; // Minimiza o formulário

            base.OnFormClosing(e);
        }

        protected override void OnClosed(EventArgs e)
        {
            // Impede que a aplicação feche imediatamente
            this.Hide(); // Esconde o formulário em vez de fechá-lo

            base.OnClosed(e);
        }

        private async void Form1_Load(object sender, EventArgs e)
        {

            PoolingVerifyGames tridentPooling = new PoolingVerifyGames(token);
            pooling = new Thread(() => tridentPooling.initPooling());
            pooling.Name = nameProcess;
            pooling.Start();
        }

        private void TextBox_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }


        private void initTrident_Click(object sender, EventArgs e)
        {



        }

        private void menuGroup_Enter(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged_1(object sender, EventArgs e)
        {

        }

        private void LogonButton_Click(object sender, EventArgs e)
        {

            this.Close();
            // Encerrando todos os processos com o mesmo nome

            Thread t = new Thread(() => Application.Run(new FormLogin()));
            t.Start();

        }

        private void menuGroup_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged_1(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged_2(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged_2(object sender, EventArgs e)
        {

        }
    }
}
