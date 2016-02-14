// File: Lab 26P2.cpp
// Created by Jacob Elkins on 4/28/14
// This program reads a number from keyboard.
// It uses two functions to calculates new salary after 5% raise and 10% raise. 

#include <cstdlib>
#include <iostream>
using namespace std;

double fivePercentRaise(double);
double tenPercentRaise(double);

int main()
{
	double salary = 0.0;
	double fivePercent = 0.0;
	double tenPercent = 0.0;
	
	cout << "Please enter current salary: ";
	cin >> salary;
	
	fivePercent = fivePercentRaise(salary);
	tenPercent = tenPercentRaise(salary);	

    system("pause");
    return 0;
}

double fivePercentRaise(double sal)
{
	sal = sal + sal * 0.05;
	cout << "New salary if you receive a 5% raise: " << sal << endl;
	return sal;
}

double tenPercentRaise(double sal)
{	
	sal = sal + sal * 0.10;
	cout << "New salary if you receive a 10% raise: " << sal << endl;
	return sal;
}    

