﻿package 
{
	import flash.display.MovieClip;
	public class Avatar extends MovieClip 
	{
		public function Avatar() 
		{
			
		}
		
		public function moveABit( xDistance:Number, yDistance:Number ):void
		{
			var baseSpeed:Number = 3;
			x += ( xDistance * baseSpeed );
			y += ( yDistance * baseSpeed );
		}
	}
}