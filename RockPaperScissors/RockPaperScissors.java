import java.util.Scanner;




public class RockPaperScissors {

	public static void main(String[] args) {
		
		RandomGenerator generator = new RandomGenerator();
		
		//Setting Min and Max allows me to upgrade to Rock, Paper, Scissors, Lizzard, Spock if I want.
		generator.setMax(3);
		generator.setMin(1);
		boolean gameOver = false;
		
		Scanner in = new Scanner(System.in);
		
		//Askes for player name.
		System.out.print("Enter your name:");
		String playerName = in.nextLine();
		
		//Creates 2 players, One for current player
		//and one for the computer.
		Player playerOne = new Player(playerName);
		Player computer = new Player("Computer");
		
		System.out.print("Enter rock (1), paper (2), or scissors (3) [-1 to quit]");
		int pChoice = in.nextInt();
		
		int cChoice = generator.getRandomNumber();
		
		if (pChoice == -1) {
			gameOver = true;
		}
		
		while (gameOver == false) {
						
			if (pChoice == cChoice) {
				if (pChoice == 1){
					System.out.printf("Computer: Rock | %s: Rock | Winner: Tie\n", playerName);
					
				}
				else if (pChoice == 2) {
					System.out.printf("Computer: Paper | %s: Paper | Winner: Tie\n", playerName);
					
					
				}
				else if (pChoice == 3) {
					System.out.printf("Computer: Scissors | %s: Scissors | Winner: Tie\n", playerName);
					
					
				}
			}
			else if (pChoice == 1) {
				if (cChoice == 2) {
					System.out.printf("Computer: Paper | %s: Rock | Winner: Computer\n", playerName);
					computer.increase();
					
					
				}
				else {
					System.out.printf("Computer: Scissors | %s: Rock | Winner: %s\n", playerName, playerName);
					playerOne.increase();
					
					
				}
			}
			else if (pChoice == 2) {
				if (cChoice == 1) {
					System.out.printf("Computer: Rock | %s: Paper | Winner: %s\n", playerName, playerName);
					playerOne.increase();
					
					
				}
				else {
					System.out.printf("Computer: Scissors | %s: Paper | Winner: Computer\n", playerName);
					computer.increase();
					
					
				}
			}
			else {
				if (cChoice == 1) {
					System.out.printf("Computer: Rock | %s: Scissors | Winner: Computer\n", playerName);
					computer.increase();
					
					
				}
				else {
					System.out.printf("Computer: Paper | %s: Scissors | Winner: %s\n", playerName, playerName);
					playerOne.increase();
					
										
				}
			}
			
			if (computer.getScore() == 3){
				gameOver = true;
			}
			else if (playerOne.getScore() == 3){
				gameOver = true;
			}
			else{
				System.out.print("Enter rock (1), paper (2), or scissors (3) [-1 to quit]");
				pChoice = in.nextInt();
				cChoice = generator.getRandomNumber();
			}
			
		}
		
		

		
		
		System.out.print("SCORE BOARD\n");
		System.out.print("------------------------\n");
		System.out.printf("Computer: %d\n", computer.getScore());
		System.out.printf("%s: %d", playerName, playerOne.getScore());
		


		
		
		in.close();
	}

}
