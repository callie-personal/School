using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace MediaPlayer
{
    /// <summary>
    /// Interaction logic for UserControl1.xaml
    /// </summary>
    public partial class UserControl1 : UserControl
    {
        public UserControl1()
        {
            InitializeComponent();
        }

		public Slider ProgressBar => progressBar;
		public TextBlock CurrentTime => currentTime;

		private void initializeTimer()
		{
			timer = new System.Windows.Threading.DispatcherTimer();
			//set the interval of the timer to 1 second
			timer.Interval = new TimeSpan(0, 0, 1);
			//when the timer ticks, update the progress bar
			timer.Tick += Timer_Tick;
			//start the timer
			timer.Start();
		}

		public void PlayCommand_Executed(object sender, ExecutedRoutedEventArgs e)
		{
			try
			{
				//play the file
				if (mediaPlayer.Source != null)
				{
					mediaPlayer.Play();
					timer.Start();
					isPlaying = true;
				}
			}
			catch (Exception ex)
			{
				MessageBox.Show("An error occurred while playing the file: " + ex.Message);
			}

		}

		private void CanExecutePlayCommand(object sender, CanExecuteRoutedEventArgs e)
		{
			//if the file is playing, disable the play button
			e.CanExecute = !isPlaying;
		}

		public void PauseCommand_Executed(object sender, ExecutedRoutedEventArgs e)
		{
			//pause the file
			try
			{
				if (isPlaying)
				{
					mediaPlayer.Pause();
					timer.Stop();
					isPlaying = false;
				}
			}
			catch (Exception ex)
			{
				MessageBox.Show("An error occurred while pausing the file: " + ex.Message);
			}
		}

		private void CanExecutePauseCommand(object sender, CanExecuteRoutedEventArgs e)
		{
			//if the file is not playing, disable the pause button
			e.CanExecute = isPlaying;
		}

		public void StopCommand_Executed(object sender, ExecutedRoutedEventArgs e)
		{
			//stop the file
			try
			{
				mediaPlayer.Stop();
				timer.Stop();
				currentTime.Text = "00:00";
				progressBar.Value = 0;
				isPlaying = false;
			}
			catch (Exception ex)
			{
				MessageBox.Show("An error occurred while stopping the file: " + ex.Message);
			}
		}

		private void CanExecuteStopCommand(object sender, CanExecuteRoutedEventArgs e)
		{
			//if the file is not playing, disable the stop button
			e.CanExecute = isPlaying;
		}

		private void Timer_Tick(object? sender, EventArgs e)
		{
			if (mediaPlayer.NaturalDuration.HasTimeSpan)
			{
				TimeSpan position = mediaPlayer.Position;
				//set the maximum value of the progress bar to the total time of the file
				progressBar.Maximum = mediaPlayer.NaturalDuration.TimeSpan.TotalSeconds;
				//set the value of the progress bar to the current position of the file
				progressBar.Value = mediaPlayer.Position.TotalSeconds;
				currentTime.Text = position.ToString(@"mm\:ss");
			}
		}
	}
}
