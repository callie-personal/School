namespace BouncyBall
{
    public partial class mainForm : Form
    {
        // member variables
        Paddle paddle;

        public mainForm()
        {
            InitializeComponent();
            //subscribe to the key press event
            this.KeyDown += mainForm_KeyDown;
        }

        private void mainForm_Load(object sender, EventArgs e)
        {
            this.WindowState = FormWindowState.Maximized;
            paddle = new Paddle(this.DisplayRectangle);
        }

        private void mainForm_Paint(object sender, PaintEventArgs e)
        {
            Graphics graphics = e.Graphics;
            //Paddle paddle = new Paddle(this.DisplayRectangle);
            paddle.Draw(graphics);
            
        }

        // method to handle the key press event
        private void mainForm_KeyDown(object sender, KeyEventArgs e)
        {
            switch (e.KeyCode)
            {
                case Keys.Left:
                    paddle.Move(Paddle.Direction.Left);
                    Invalidate();
                    break;
                case Keys.Right:
                    paddle.Move(Paddle.Direction.Right);
                    Invalidate();
                    break;
            }
        }
         
    }
}
