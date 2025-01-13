using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Snake.Assets
{
	public class GameState
	{
		// Properties
		public int Rows { get; }
		public int Cols { get; }
		public GridValue[,] Grid { get; }
		public Direction Dir { get; private set; }
		public int Score { get; private set; }
		public bool GameOver { get; private set; }

		// Private fields
		private readonly LinkedList<Direction> dirChanges = new LinkedList<Direction>();
		private readonly LinkedList<Position> snakePositions = new LinkedList<Position>();
		private readonly Random random = new Random();

		// Constructor
		public GameState(int rows, int cols)
		{
			Rows = rows;
			Cols = cols;
			Grid = new GridValue[Rows, Cols];
			Dir = Direction.Right;

			AddSnake();
			AddFood();
		}

		// Method to add initial snake
		private void AddSnake()
		{
			int r = Rows / 2;

			// Add snake segments horizontally
			for (int c = 1; c <= 3; c++)
			{
				Grid[r, c] = GridValue.Snake;
				snakePositions.AddFirst(new Position(r, c));
			}
		}

		// Method to get empty positions on the grid
		private IEnumerable<Position> EmptyPositions()
		{
			for (int r = 0; r < Rows; r++)
			{
				for (int c = 0; c < Cols; c++)
				{
					if (Grid[r, c] == GridValue.Empty)
					{
						yield return new Position(r, c);
					}
				}
			}
		}

		// Method to add food at a random empty position
		private void AddFood()
		{
			List<Position> empty = new List<Position>(EmptyPositions());
			if (empty.Count == 0)
			{
				return;
			}

			Position pos = empty[random.Next(empty.Count)];
			Grid[pos.Row, pos.Col] = GridValue.Food;
		}

		// Method to get the position of the snake's head
		public Position HeadPosition()
		{
			return snakePositions.First.Value;
		}

		// Method to get the position of the snake's tail
		public Position TailPosition()
		{
			return snakePositions.Last.Value;
		}

		// Method to get all positions occupied by the snake
		public IEnumerable<Position> SnakePositions()
		{
			return snakePositions;
		}

		// Method to add a new head to the snake
		private void AddHead(Position pos)
		{
			snakePositions.AddFirst(pos);
			Grid[pos.Row, pos.Col] = GridValue.Snake;
		}

		// Method to remove the tail of the snake
		private void RemoveTail()
		{
			Position tail = snakePositions.Last.Value;
			Grid[tail.Row, tail.Col] = GridValue.Empty;
			snakePositions.RemoveLast();
		}

		// Method to get the last direction of movement
		private Direction GetLastDirection()
		{
			if (dirChanges.Count == 0)
			{
				return Dir;
			}

			return dirChanges.Last.Value;
		}

		// Method to check if a direction change is allowed
		private bool CanChangeDirection(Direction newDir)
		{
			if (dirChanges.Count == 2)
			{
				return false;
			}

			Direction lastDir = GetLastDirection();
			return newDir != lastDir && newDir != lastDir.Opposite();
		}

		// Method to change the direction of the snake
		public void ChangeDirection(Direction newDir)
		{
			if (CanChangeDirection(newDir))
			{
				dirChanges.AddLast(newDir);
			}
		}

		// Method to check if a position is outside the grid
		public bool OutsideGrid(Position pos)
		{
			return pos.Row < 0 || pos.Row >= Rows || pos.Col < 0 || pos.Col >= Cols;
		}

		// Method to check if the snake will hit something at a given position
		private GridValue WillHit(Position newHeadPos)
		{
			if (OutsideGrid(newHeadPos))
			{
				return GridValue.Outside;
			}

			if (newHeadPos == TailPosition())
			{
				return GridValue.Empty;
			}
			
			return Grid[newHeadPos.Row, newHeadPos.Col];
		}

		// Method to move the snake
		public void Move()
		{
			if (dirChanges.Count > 0)
			{
				// Change direction
				Dir = dirChanges.First.Value;
				// Remove the first direction change
				dirChanges.RemoveFirst();
			}
			
			Position newHeadPos = HeadPosition().Translate(Dir);
			GridValue hit = WillHit(newHeadPos);
			// Check if the snake will hit the wall, itself, or food
			if (hit == GridValue.Outside || hit == GridValue.Snake)
			{
				GameOver = true;
			}
			else if (hit == GridValue.Empty)
			{
				RemoveTail();
				AddHead(newHeadPos);
			}
			else if (hit == GridValue.Food)
			{
				AddHead(newHeadPos);
				Score++;
				AddFood();

				// Play the sound effect
				PlayEatFoodSound();
			}
		}

		// Method to play the sound effect when eating food
		private void PlayEatFoodSound()
		{
			Task.Run(() =>
			{
				Console.Beep(250, 250);
			});
		}
	}
}

