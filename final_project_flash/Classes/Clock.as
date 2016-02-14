﻿package
{
	import flash.display.MovieClip;
	public class Clock extends Counter
	{
		public function Clock()
		{
			super();
		}
 
		override public function updateDisplay():void
		{
			super.updateDisplay();
			
			var frameToSkipTo:Number = currentValue / 1000;
			frameToSkipTo = Math.floor( frameToSkipTo );
			frameToSkipTo = frameToSkipTo + 1;
			while ( frameToSkipTo > 20 )
			{
				frameToSkipTo = frameToSkipTo - 20;
			}
			clockDisplay.gotoAndStop( frameToSkipTo );
 
		}
	}
}
