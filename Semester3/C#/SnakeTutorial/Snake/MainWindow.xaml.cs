using Snake.Assets; // Import the namespace where the game assets are located
using System.Runtime.Intrinsics.X86;
using System.Windows; // Import necessary namespaces for WPF application
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using static System.Net.Mime.MediaTypeNames;
using System.Windows.Shapes;
namespace Snake
{

	//a. GDI+ for graphics applications:

	//GDI+ is like a toolbox for making pictures on computers.It helps developers easily draw shapes, write text,
	//and work with images on Windows. It makes it simpler to create graphics without worrying too much about the technical stuff.

	//b.Double-buffering and its benefits in games or graphics applications:

	//Imagine drawing on two sheets of paper.While one sheet is shown to everyone (front buffer), you draw on the other one 
	//(back buffer). When you finish, you quickly swap them. This swapping reduces flickering and makes what you see smoother, 
	//just like in games or when moving windows on your computer screen.

	// Main window class for the Snake game
	public partial class MainWindow : Window
	{
		// Dictionary to map grid values to images
		private readonly Dictionary<GridValue, ImageSource> gridValToImage = new()
		{
			{ GridValue.Empty, Images.Empty },
			{ GridValue.Snake, Images.Body },
			{ GridValue.Food, Images.Food },
		};

		// Dictionary to map directions to rotation angles for snake head
		private readonly Dictionary<Direction, int> dirToRotation = new()
		{
			{ Direction.Left, 270 },
			{ Direction.Right, 90 },
			{ Direction.Up, 0 },
			{ Direction.Down, 180 },
		};

		private readonly int rows = 15, cols = 15; // Size of the grid
		private readonly Image[,] gridImages; // Array to hold grid images
		private GameState gameState; // Instance of the game state
		private bool gameRunning; // Flag to indicate if the game is currently running

		// Constructor for the main window
		public MainWindow()
		{
			InitializeComponent(); // Initialize the components defined in XAML
			gridImages = SetupGrid(); // Set up the grid of images
			gameState = new GameState(rows, cols); // Initialize the game state
		}

		private async Task RunGame()
		{
			Draw();
			await ShowCountDown();
			Overlay.Visibility = Visibility.Hidden;
			await GameLoop();
			await ShowGameOver();
			gameState = new GameState(rows, cols);
		}


		// Method to set up the grid of images
		private Image[,] SetupGrid()
		{
			Image[,] images = new Image[rows, cols]; // Create a 2D array to hold images
			GameGrid.Rows = rows; // Set the number of rows in the grid
			GameGrid.Columns = cols; // Set the number of columns in the grid
			GameGrid.Width = GameGrid.Height * (cols / (double)rows); // Adjust grid width to maintain aspect ratio

			// Loop through each cell in the grid
			for (int r = 0; r < rows; r++)
			{
				for (int c = 0; c < cols; c++)
				{
					Image image = new Image() // Create a new image control
					{
						Source = Images.Empty, // Set the initial image source to represent an empty cell
						RenderTransformOrigin = new Point(0.5, 0.5), // Set the render transform origin for rotation
					};
					images[r, c] = image; // Add the image to the array
					GameGrid.Children.Add(image); // Add the image to the grid
				}
			}

			return images; // Return the array of images
		}

		// Method to handle the preview key down event for starting the game
		private async void Window_PreviewKeyDown(object sender, KeyEventArgs e)
		{
			if (Overlay.Visibility == Visibility.Visible) // If the overlay is visible, ignore key events
			{
				e.Handled = true;
			}

			if (!gameRunning) // If the game is not already running
			{
				gameRunning = true; // Set the game running flag to true
				await RunGame(); // Start the game
				gameRunning = false; // Set the game running flag back to false when game ends
			}
		}

		// Method to handle the key down event for changing snake direction
		private void Window_KeyDown(object sender, KeyEventArgs e)
		{
			if (gameState.GameOver) // If the game is over, do nothing
			{
				return;
			}

			// Determine the direction based on the pressed key
			switch (e.Key)
			{
				case Key.Left:
					gameState.ChangeDirection(Direction.Left);
					break;
				case Key.Right:
					gameState.ChangeDirection(Direction.Right);
					break;
				case Key.Up:
					gameState.ChangeDirection(Direction.Up);
					break;
				case Key.Down:
					gameState.ChangeDirection(Direction.Down);
					break;
			}
		}

		// Method to handle the game loop
		private async Task GameLoop()
		{
			while (!gameState.GameOver) // Continue looping until the game is over
			{
				await Task.Delay(100); // Delay to control game speed
				gameState.Move(); // Move the snake
				Draw(); // Redraw the game grid
			}
		}

		// Method to draw the game grid
		private void Draw()
		{
			DrawGrid(); // Draw the grid cells
			DrawSnakeHead(); // Draw the snake head
			ScoreText.Text = $"SCORE: {gameState.Score}"; // Update the score display
		}

		// Method to draw the grid cells
		private void DrawGrid()
		{
			for (int r = 0; r < rows; r++) // Loop through each row
			{
				for (int c = 0; c < cols; c++) // Loop through each column
				{
					GridValue gridVal = gameState.Grid[r, c]; // Get the grid value at the current position
					gridImages[r, c].Source = gridValToImage[gridVal]; // Set the image source based on the grid value
					gridImages[r, c].RenderTransform = Transform.Identity; // Reset any rotation transform
				}
			}
		}

		// Method to draw the snake head
		private void DrawSnakeHead()
		{
			Position headPos = gameState.HeadPosition(); // Get the position of the snake head
			Image image = gridImages[headPos.Row, headPos.Col]; // Get the image control at the head position
			image.Source = Images.Head; // Set the image source to represent the snake head

			int rotation = dirToRotation[gameState.Dir]; // Get the rotation angle based on the snake direction
			image.RenderTransform = new RotateTransform(rotation); // Apply rotation transform to the image
		}

		// Method to handle the button click event
		private void Button_Click(object sender, RoutedEventArgs e)
		{
			// Handle button click event here
		}

		// Method to handle the game over screen
		private async Task ShowGameOver()
		{
			await DrawDeadSnake(); // Draw the dead snake animation
			await Task.Delay(1000); // Delay before showing game over screen
			Overlay.Visibility = Visibility.Visible; // Show the overlay
			OverlayText.Text = "GAME OVER\nPress any key to start"; // Display game over text
		}

		// Method to display the dead snake animation
		private async Task DrawDeadSnake()
		{
			List<Position> snakePositions = new List<Position>(gameState.SnakePositions()); // Get snake positions
			for (int i = 0; i < snakePositions.Count; i++) // Loop through each snake position
			{
				Position pos = snakePositions[i]; // Get the current position
				ImageSource source = i == 0 ? Images.DeadHead : Images.DeadBody; // Determine image source
				gridImages[pos.Row, pos.Col].Source = source; // Set image source for the current position

				await Task.Delay(50); // Delay to control animation speed
			}
			PlayDeathSound(); // Play death sound effect
		}

		private async Task ShowCountDown()
		{
			for (int i = 3; i > 0; i--)
			{
				OverlayText.Text = i.ToString();
				await Task.Delay(500);
			}
		}

		// Method to play the death sound effect
		public void PlayDeathSound()
		{
			Task.Run(() =>
			{
				Console.Beep(500, 200); // Play beep sound
				Console.Beep(300, 200); // Play beep sound
			});
		}

		// Method to handle the button click event for showing text
		private void Button_Click_1(object sender, RoutedEventArgs e)
		{
			// Show text when button is clicked
			MessageBox.Show("Callie Pretty\nW0184129");
		}
	}
}
