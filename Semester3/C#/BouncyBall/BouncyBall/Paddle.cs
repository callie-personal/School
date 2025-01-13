using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BouncyBall
{
    internal class Paddle
    {
        //member variables
        private readonly int width = 100;
        private readonly int height = 20;
        private readonly int xVelocity = 10;

        public Rectangle DisplayRectangle;
        private Rectangle Canvas;
        public enum Direction { Left, Right }

        public Paddle(Rectangle canvas)
        {
            this.Canvas = canvas;
            // constructor for the Paddle class
            int paddleX = (canvas.Width / 2) - (int) (width / 2);
            int paddleY = canvas.Bottom - (int) (canvas.Height * 0.10);
            DisplayRectangle = new Rectangle(paddleX, paddleY, width, height);
        }
        public void Draw(Graphics graphics)
        {
            // method to draw the rectangle object with the specified dimensions
            //Rectangle rectangle = new Rectangle(50, 100, 100, 20);
            graphics.FillRectangle(Brushes.White, DisplayRectangle);
        }

        public void Move(Direction directions)
        {
            // method to move the paddle left or right
            switch (directions)
            {
                case Direction.Left:
                    if (this.DisplayRectangle.X <= Canvas.Left)
                    {
                        this.DisplayRectangle.X = 0;
                    }
                    else 
                    { 
                        this.DisplayRectangle.X -= xVelocity; 
                    }
                    break;
                case Direction.Right:
                    int maxValue = Canvas.Right - DisplayRectangle.Width;

                    if (this.DisplayRectangle.X >= maxValue)
                    {
                        this.DisplayRectangle.X = maxValue;
                    }
                    else
                    {
                        this.DisplayRectangle.X += xVelocity;
                    }
                    break;
            }
        }
    }
}
