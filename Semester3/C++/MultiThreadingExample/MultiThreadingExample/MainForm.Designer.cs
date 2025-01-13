namespace MultiThreadingExample
{
    partial class MainForm
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
            startBtn = new Button();
            taskProgressBar = new ProgressBar();
            SuspendLayout();
            // 
            // startBtn
            // 
            startBtn.Location = new Point(617, 88);
            startBtn.Name = "startBtn";
            startBtn.Size = new Size(132, 40);
            startBtn.TabIndex = 0;
            startBtn.Text = "Start";
            startBtn.UseVisualStyleBackColor = true;
            startBtn.Click += this.Form1_Load;
            // 
            // taskProgressBar
            // 
            taskProgressBar.Location = new Point(72, 88);
            taskProgressBar.Name = "taskProgressBar";
            taskProgressBar.Size = new Size(450, 40);
            taskProgressBar.TabIndex = 1;
            // 
            // MainForm
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(818, 263);
            Controls.Add(taskProgressBar);
            Controls.Add(startBtn);
            Name = "MainForm";
            Text = "Threading Form";
            Load += Form1_Load;
            ResumeLayout(false);
        }

        #endregion

        private Button startBtn;
        private ProgressBar taskProgressBar;
    }
}
