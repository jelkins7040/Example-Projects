package
{
	import flash.display.MovieClip;
	import flash.display.SimpleButton;
	import flash.events.MouseEvent;
	import flash.text.TextField;
	import flash.ui.Mouse;
	
	public class GameOverScreen extends MovieClip
	{
		public function GameOverScreen()
		{
			Mouse.show();
			restartButton.addEventListener( MouseEvent.CLICK, onClickRestart );
		}
		
		
		public function onClickRestart( mouseEvent:MouseEvent ) :void
		{
			dispatchEvent( new NavigationEvent( NavigationEvent.RESTART ) );
		}
		
		public function setFinalScore( scoreValue:Number ) :void
		{
			finalScore.text = scoreValue.toString();
		}
		
		public function setFinalClockTime( clockValue:Number ):void
		{
			finalClockTime.text = Math.floor( clockValue / 1000 ).toString();
		}
	}
}
