/**
 * Generates a random number with min and max values provided by the calling Program.
 *
 * 
 * <p/>
 * Bugs: No known issues.
 * 
 * @author Jacob Elkins
 * @version 1.0
 * @since 2015-01-24
 * 
 */

import java.util.Random;


public class RandomGenerator {

	int max;
	int min;
	
	Random generator = new Random();
	
	public void setMax(int max) {
		this.max = max;
	}
	
	public void setMin(int min) {
		this.min = min;
	}
	
	public int getRandomNumber() {
		return generator.nextInt(max-min+ 1) + min;
	}
	
}
