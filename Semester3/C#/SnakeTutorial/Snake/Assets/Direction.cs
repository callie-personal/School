using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Snake.Assets
{
	// Represents a direction of movement on the grid
	public class Direction
	{
		// Predefined directions: Left, Right, Up, Down
		public readonly static Direction Left = new Direction(0, -1);
		public readonly static Direction Right = new Direction(0, 1);
		public readonly static Direction Up = new Direction(-1, 0);
		public readonly static Direction Down = new Direction(1, 0);

		// Properties
		public int RowOffSet { get; } // Row offset
		public int ColOffSet { get; } // Column offset

		// Constructor (private to restrict instantiation to predefined directions)
		private Direction(int rowOffSet, int colOffSet)
		{
			RowOffSet = rowOffSet;
			ColOffSet = colOffSet;
		}

		// Method to get the opposite direction
		public Direction Opposite()
		{
			// Invert the row and column offsets
			return new Direction(-RowOffSet, -ColOffSet);
		}

		// Override Equals method to compare directions
		public override bool Equals(object obj)
		{
			// Check if the object is a Direction and has the same row and column offsets
			return obj is Direction direction &&
				   RowOffSet == direction.RowOffSet &&
				   ColOffSet == direction.ColOffSet;
		}

		// Override GetHashCode method to generate a hash code for the direction
		public override int GetHashCode()
		{
			// Combine the hash codes of the row and column offsets
			return HashCode.Combine(RowOffSet, ColOffSet);
		}

		// Overload equality operator to compare directions
		public static bool operator ==(Direction left, Direction right)
		{
			return EqualityComparer<Direction>.Default.Equals(left, right);
		}

		// Overload inequality operator to compare directions
		public static bool operator !=(Direction left, Direction right)
		{
			return !(left == right);
		}
	}
}

