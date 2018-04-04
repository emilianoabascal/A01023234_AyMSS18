#include <iostream>
#include <stdexcept>

using namespace std;

class ArrayInts;

class Proxy {
	ArrayInts* a;
	int idx;
	public:
		Proxy(ArrayInts* a, int idx){
			this -> a = a;
			this -> idx = idx;
		}
		
		void operator = (int);
};

class ArrayInts{
	int*array;
	int size;
	public:
		ArrayInts(){
			int size = 100;
			array = new int[size];
		}
		Proxy operator[](int idx){
			if(idx < 0){
				cout << "oieme no" << endl;
				throw invalid_argument("No hay indices negativos");
				
			} 
			return Proxy(this, idx);
		}	
		
		int& setGet(int idx){
			return array[idx];
		}
};

void Proxy:: operator = (int value){
	if(value < 0){
		cout << "No hay valores negativos" << endl;
		throw invalid_argument("No hay indices negativos");
	}
	else{
		a -> setGet(idx) = value;
	}
	
}




int main(){
	ArrayInts a;
	a[3] = 5;
	cout << a.setGet(3) << endl;
	return 0;
}