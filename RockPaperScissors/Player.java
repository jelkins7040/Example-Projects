
public class Player {
	
	String playerName;
	int score;
	
	Player (String name){
		playerName = name;
		score = 0;
	}
	
	public void increase() {
		score = score += 1;
	}
	
	public int getScore() {
		return score;
	}
	
	

}
