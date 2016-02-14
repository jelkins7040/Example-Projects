package
{
	import flash.display.MovieClip;
	import flash.utils.Timer;
	import flash.events.TimerEvent;
	import flash.ui.Mouse;
	import flash.events.KeyboardEvent;
	import flash.ui.Keyboard;
	import flash.events.Event;

	public class AvoiderGame extends MovieClip
	{
		public var army:Array;
		public var enemy:Enemy;
		public var avatar:Avatar;
		public var gameTimer:Timer;
		public var scoreTimer:Timer;
		public var useMouseControl:Boolean;
		public var downKeyIsBeingPressed:Boolean;
		public var upKeyIsBeingPressed:Boolean;
		public var leftKeyIsBeingPressed:Boolean;
		public var rightKeyIsBeingPressed:Boolean;
		
		public function AvoiderGame()
		{
			downKeyIsBeingPressed = false;
			upKeyIsBeingPressed = false;
			leftKeyIsBeingPressed = false;
			rightKeyIsBeingPressed = false;
			
			useMouseControl = false;
			
			Mouse.hide();
			
			army = new Array();
			var newEnemy = new Enemy(415, 100);
			army.push( newEnemy );
			addChild( newEnemy );
			
			avatar = new Avatar();
			addChild( avatar );
			if ( useMouseControl )
			{
				avatar.x = mouseX;
				avatar.y = mouseY;
			}
			else
			{
				avatar.x = 50;
				avatar.y = 150;
			}

			
			gameTimer = new Timer( 25 );
			gameTimer.addEventListener( TimerEvent.TIMER, onTick );
			gameTimer.start();
			
			scoreTimer = new Timer ( 25 );
			gameTimer.addEventListener( TimerEvent.TIMER, onScore );
			gameTimer.start();
			
			addEventListener( Event.ADDED_TO_STAGE, onAddToStage );
		}
		
		public function onAddToStage( event:Event ):void
		{
			stage.addEventListener( KeyboardEvent.KEY_DOWN, onKeyPress );
			stage.addEventListener( KeyboardEvent.KEY_UP, onKeyRelease );
		}
		
		public function onKeyPress( keyboardEvent:KeyboardEvent ):void
		{
			if ( keyboardEvent.keyCode == Keyboard.DOWN )
			{
				downKeyIsBeingPressed = true;
			}
			else if ( keyboardEvent.keyCode == Keyboard.UP )
			{
				upKeyIsBeingPressed = true;
			}
			else if ( keyboardEvent.keyCode == Keyboard.LEFT )
			{
				leftKeyIsBeingPressed = true;
			}
			else if ( keyboardEvent.keyCode == Keyboard.RIGHT )
			{
				rightKeyIsBeingPressed = true;
			}
		}
		
		public function onKeyRelease( keyboardEvent:KeyboardEvent ):void
		{
			if ( keyboardEvent.keyCode == Keyboard.DOWN )
			{
				downKeyIsBeingPressed = false;
			}
			else if ( keyboardEvent.keyCode == Keyboard.UP )
			{
				upKeyIsBeingPressed = false;
			}
			else if ( keyboardEvent.keyCode == Keyboard.LEFT )
			{
				leftKeyIsBeingPressed = false;
			}
			else if ( keyboardEvent.keyCode == Keyboard.RIGHT )
			{
				rightKeyIsBeingPressed = false;
			}
		}
		
		public function onTick( timerEvent:TimerEvent ) :void
		{
			gameClock.addToValue( 25 );
			if( Math.random() < 0.075 )
			{
				var randomX:Number = Math.random() * 400;
				var newEnemy:Enemy = new Enemy( 415, randomX );
				army.push( newEnemy );
				addChild( newEnemy );
			}
			
			
			if ( useMouseControl )
			{
				avatar.x = mouseX;
				avatar.y = mouseY;
			}
			else
			{
				if ( downKeyIsBeingPressed )
				{
					avatar.moveABit( 0, 1 );
				}
				else if ( upKeyIsBeingPressed )
				{
					avatar.moveABit( 0, -1 );
				}
				else if ( leftKeyIsBeingPressed )
				{
					avatar.moveABit( -1, 0 );
				}
				else if ( rightKeyIsBeingPressed )
				{
					avatar.moveABit( 1, 0 );
				}
			}	
			
			if ( avatar.x < ( avatar.width / 2 ) )
			{
				avatar.x = avatar.width / 2;
			}
			if ( avatar.x > 400 - ( avatar.width / 2 ) )
			{
				avatar.x = 400 - ( avatar.width / 2 );
			}
			if ( avatar.y < ( avatar.height / 2 ) )
			{
				avatar.y = avatar.height / 2;
			}
			if ( avatar.y > 300 - ( avatar.height / 2 ) )
			{
				avatar.y = 300 - ( avatar.height / 2 );
			}
			
		var avatarHasBeenHit:Boolean = false;
		for each ( var enemy:Enemy in army )
		{
				enemy.moveABit();
			if ( PixelPerfectCollisionDetection.isColliding( avatar, enemy, this, true ) )
			{
				gameTimer.stop();
				avatarHasBeenHit = true;
			}
		}
		
		if ( avatarHasBeenHit )
		{
			dispatchEvent( new AvatarEvent( AvatarEvent.DEAD ) );
		}
		}
		
		public function onScore(timerEvent:TimerEvent ) :void
		{
			gameScore.addToValue(1);
		}
		
		public function getFinalScore():Number
		{
			return gameScore.currentValue;
		}
		
		public function getFinalClockTime():Number
		{
			return gameClock.currentValue;
		}
		
			
	}
}