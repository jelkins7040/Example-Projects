package
{
	import flash.display.MovieClip;

	public class Enemy extends MovieClip
	{
		
		public var ySpeed:Number;
		public var xSpeed:Number;
		
		public function Enemy( startX:Number, startY:Number )
		{
			x = startX;
			y = startY;
			
			xSpeed = 2;
			ySpeed = 0;
		}
		
		public function moveABit() :void
		{
			x = x - xSpeed;
			y = y + ySpeed;
		}
	}
}