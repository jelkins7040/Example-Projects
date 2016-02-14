package 
{
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.ProgressEvent;
	
	public class DocumentClass extends MovieClip 
	{
		public var menuScreen:MenuScreen;
		public var playScreen:AvoiderGame;
		public var gameOverScreen:GameOverScreen;
		public var loadingProgress:LoadingProgress;
		
		public function DocumentClass() 
		{
			loadingProgress = new LoadingProgress();
			loadingProgress.x = 200;
			loadingProgress.y = 150;
			addChild( loadingProgress );			
			loaderInfo.addEventListener( Event.COMPLETE, onCompletelyDownloaded );
			loaderInfo.addEventListener( ProgressEvent.PROGRESS, onProgressMade );
		}
		
		public function onProgressMade( progressEvent:ProgressEvent ) :void
		{
			trace( Math.floor( 100 * loaderInfo.bytesLoaded / loaderInfo.bytesTotal ) );
		}
		
		public function onCompletelyDownloaded (event:Event ) :void
		{
			gotoAndStop(3);
			showMenuScreen();
		}
		
		public function showMenuScreen() :void
		{
			menuScreen = new MenuScreen();
			menuScreen.addEventListener( NavigationEvent.START, onRequestStart );
			menuScreen.x = 0;
			menuScreen.y = 0;
			addChild( menuScreen );
		}
		
		public function onAvatarDeath( avatarEvent:AvatarEvent ) :void
		{
			var finalScore:Number = playScreen.getFinalScore();
			var finalClockTime:Number = playScreen.getFinalClockTime();
			
			gameOverScreen = new GameOverScreen();
			gameOverScreen.addEventListener( NavigationEvent.RESTART, onRequestRestart );
			gameOverScreen.x = 0;
			gameOverScreen.y = 0;
			gameOverScreen.setFinalScore( finalScore );
			gameOverScreen.setFinalClockTime( finalClockTime );
			addChild( gameOverScreen );
			
			playScreen = null;
		}
		
		public function restartGame():void
		{
			playScreen = new AvoiderGame();
			playScreen.addEventListener( AvatarEvent.DEAD, onAvatarDeath );
			addChild( playScreen );
			playScreen.x = 0;
			playScreen.y = 0;
 
			gameOverScreen = null;
		}
		
		public function onRequestRestart( navigationEvent:NavigationEvent ) :void
		{
			restartGame();
		}
		
		public function onRequestStart( navigationEvent:NavigationEvent ):void
		{
			playScreen = new AvoiderGame();
			playScreen.addEventListener( AvatarEvent.DEAD, onAvatarDeath );
			playScreen.x = 0;
			playScreen.y = 0;
			addChild( playScreen );
 
			menuScreen = null;
		}
		
		
	}
}