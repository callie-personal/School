namespace MultiThreadingExample
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            Thread longThread = new Thread(LongRunningTask);
            // Start the thread
            longThread.Start();
            //longThread.Name = "My first worker thread";
        }

        private void LongRunningTask()
        {
            for (int i = 0; i < 101; i++)
            {
                Thread.Sleep(100);
                if (taskProgressBar.InvokeRequired)
                {
                    MethodInvoker invoker = new MethodInvoker(delegate ()
                    {
                        taskProgressBar.Value = i;
                    });
                    taskProgressBar.Invoke(invoker);
                }
                else 
                { 
                    taskProgressBar.Value = i; 
                }
                taskProgressBar.Value = i;
            }
        }
    }
}
