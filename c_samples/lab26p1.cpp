// File: Lab 26P1.cpp
// Created by Jacob Elkins on 4-28-14
// This program reads a product code from keyboard.

#include <cstdlib>
#include <iostream>
using namespace std;

void getProductCode(string &);

int main()
{
	string productCode = "";
	
	getProductCode(productCode);	
	cout << "Product code read from keyboard: " << productCode << endl;

    system("pause");
    return 0;
}

void getProductCode(string & code)
{
	bool valid = false;
	while (valid == false )
	{
		cout << "Enter the orange's 4-digit code. " << endl;
		cout << "The last digit must be either 4 or 7." << endl;
		cout << "Enter code here: ";
		cin >> code;
		if (code.length() == 4 && (code[3] == '4' || code[3] == '7'))
		{
			valid = true;
		}
		else
		{
			cout << "Invalid code.  Please try again." << endl;
		}
	}
}

