// File: Lab 26P3.cpp
// Created by Jacob Elkins on 4/28/14
// This program  

#include <cstdlib>
#include <iostream>
using namespace std;

void compareNums(double, double, double &, double &);

int main()
{
	double numOne = 0.0;
	double numTwo = 0.0;
	double larger = 0.0;
	double smaller = 0.0;
	
	cout << "Please enter a number: " << endl;
	cin >> numOne;
	cout << "Please enter another number: " << endl;
	cin >> numTwo;
	
	compareNums(numOne, numTwo, larger, smaller);
	
	cout << "Larger number: " << larger << endl;
	cout << "Smaller number: " << smaller << endl;	
	
	system("pause");
    return 0;
}

void compareNums (double one, double two, double & big,double & small)
{
	if(one > two)
	{
		big = one;
		small = two;	
	}
	else
	{
		big = two;
		small = one;
	}
	
	
}
