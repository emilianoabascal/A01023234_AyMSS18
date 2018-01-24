#ifndef PROTOTYPE_H
#define PROTOTYPE_H
#include <iostream>
using namespace std;

class Prototype
{
public:
	virtual Prototype* clone() = 0;
};

class Concrete1 : public Prototype
{
public:
	Prototype* clone()
	{ 
		return new Concrete1(*this);
	}
};

class Concrete2 : public Prototype
{
public:
	Prototype* clone()
	{ 
		return new Concrete2(*this);
	}
};
#endif

int main(){
	Concrete1* c1 = new Concrete1;

		int x;
		cin >> x;
		return 0;
}