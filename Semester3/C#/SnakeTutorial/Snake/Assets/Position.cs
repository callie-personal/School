using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Snake.Assets
{
	// Represents a position on the grid
	public class Position
	{
		// Properties
		public int Row { get; } // Row index
		public int Col { get; } // Column index

		// Constructor
		public Position(int row, int col)
		{
			Row = row;
			Col = col;
		}

		// Method to translate the position based on a direction
		public Position Translate(Direction dir)
		{
			// Calculate the new row and column based on the direction
			return new Position(Row + dir.RowOffSet, Col + dir.ColOffSet);
		}

		// Override Equals method to compare positions
		public override bool Equals(object obj)
		{
			// Check if the object is a Position and has the same row and column
			return obj is Position position &&
				   Row == position.Row &&
				   Col == position.Col;
		}

		// Override GetHashCode method to generate a hash code for the position
		public override int GetHashCode()
		{
			// Combine the hash codes of the row and column
			return HashCode.Combine(Row, Col);
		}

		// Overload equality operator to compare positions
		public static bool operator ==(Position left, Position right)
		{
			return EqualityComparer<Position>.Default.Equals(left, right);
		}

		// Overload inequality operator to compare positions
		public static bool operator !=(Position left, Position right)
		{
			return !(left == right);
		}
	}
}
