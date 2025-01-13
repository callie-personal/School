using Microsoft.Win32;
using System.IO;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media.Imaging;


namespace MediaPlayer
{
	/// <summary>
	/// Interaction logic for MainWindow.xaml
	/// </summary>
	public partial class MainWindow : Window
	{
		//routed commands decouple the command from the UI element that invokes the command
		public static RoutedCommand PlayCommand = new RoutedCommand();

		private bool isPlaying = false;
		private string currentFile = string.Empty;
		private System.Windows.Threading.DispatcherTimer timer;

		public MainWindow()
		{
			InitializeComponent();
			//initializeTimer();

			var mediaControls = (MediaPlayerControls)FindName("MediaPlayerControls");
			mediaControls.ProgressBar.Value = someValue;
			mediaControls.CurrentTime.Text = "some time";
		}


		public void OpenCommand_Executed(object sender, ExecutedRoutedEventArgs e)
		{
			try
			{
				OpenFileDialog openFileDialog = new OpenFileDialog
				{
					DefaultExt = ".mp3", // Default file extension
					Filter = "Media Files|*.mp3;*.mp4;*.wmv|All Files|*.*" // Filter for media files
				};

				//if the user selects a file, open it (Image section from ChatGPT "How to Extract Album Art from MP3 Files in WPF" I believe)
				if (openFileDialog.ShowDialog() == true)
				{
					currentFile = openFileDialog.FileName;
					TagLib.File file = TagLib.File.Create(currentFile);

					// Extracting album art from the file
					if (file.Tag.Pictures.Length >= 1)
					{
						// Get the album art data
						var albumArtData = file.Tag.Pictures[0].Data.Data;

						// Convert the byte array to a BitmapImage
						using (MemoryStream ms = new MemoryStream(albumArtData))
						{
							BitmapImage albumImage = new BitmapImage();
							albumImage.BeginInit();
							albumImage.StreamSource = ms;
							albumImage.CacheOption = BitmapCacheOption.OnLoad;
							albumImage.EndInit();

							// Set the album art in the Image control
							albumArt.Source = albumImage;
						}
					}
					else
					{
						// No album art found, clear the Image
						albumArt.Source = null;
					}
					nowPlaying.Visibility = Visibility.Visible;
					albumArt.Visibility = Visibility.Visible;
					idStackPanel.Visibility = Visibility.Collapsed;
				}

				//end ChatGPT section

				nowPlaying.Text = "Now Playing: " + openFileDialog.SafeFileName;
				mediaPlayer.Source = new Uri(currentFile);
				mediaPlayer.LoadedBehavior = MediaState.Manual;
				mediaPlayer.UnloadedBehavior = MediaState.Stop;
			}
			catch (Exception ex)
			{
				MessageBox.Show("An error occurred while opening the file: " + ex.Message);
			}
		}

		public void ExitCommand_Executed(object sender, ExecutedRoutedEventArgs e)
		{
			//close the application
			Application.Current.Shutdown();
		}



		private void EditMenu_Click(object sender, EventArgs e)
		{
			try
			{
				//if the file is playing, pause it
				if (isPlaying)
				{
					mediaPlayer.Pause();
					isPlaying = false;
				}
				//using the TagLib library to read the ID3 tags from the file
				TagLib.File file = TagLib.File.Create(currentFile);

				//setting the textboxes to the values of the ID3 tags
				ArtistTextBox.Text = file.Tag.FirstAlbumArtist;
				TitleTextBox.Text = file.Tag.Title;
				AlbumTextBox.Text = file.Tag.Album;
				YearTextBox.Text = file.Tag.Year.ToString();
				GenreTextBox.Text = file.Tag.FirstGenre;

				nowPlaying.Visibility = Visibility.Collapsed;
				albumArt.Visibility = Visibility.Collapsed;
				idStackPanel.Visibility = Visibility.Visible;
			}
			catch (Exception ex)
			{
				MessageBox.Show("An error occurred while reading the file tags: " + ex.Message);
			}
		}

		private void SaveButton_Click(object sender, RoutedEventArgs e)
		{
			try
			{
				mediaPlayer.Close();
				isPlaying = false;

				//using the TagLib library to write the ID3 tags to the file
				TagLib.File file = TagLib.File.Create(currentFile);
				file.Tag.AlbumArtists = new string[] { ArtistTextBox.Text };
				file.Tag.Title = TitleTextBox.Text;
				file.Tag.Album = AlbumTextBox.Text;
				file.Tag.Year = uint.Parse(YearTextBox.Text);
				file.Tag.Genres = new string[] { GenreTextBox.Text };
				file.Save();
				idStackPanel.Visibility = Visibility.Collapsed;
				nowPlaying.Visibility = Visibility.Visible;
				albumArt.Visibility = Visibility.Visible;
			}
			catch (Exception ex)
			{
				MessageBox.Show("An error occurred while saving the file tags: " + ex.Message);
			}

		}
	}
}