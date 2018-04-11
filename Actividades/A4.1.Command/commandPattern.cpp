#include <iostream>
#include "vector"
using namespace std;



typedef int(*f)(int, int);//Opcion 1
template <class type> type suma(type n, type b){
	return n + b;
}
template <class type> type resta(type n, type b){
	return n - b;
}
template <class type> type multiplicacion(type n, type b){
	return n * b;
}

int execute(int n, int b, int(*f)(int, int)){//opcion 0
	return f(n, b);
}

/*f getFunction(char name){//Opcion 1
	if (name == 's'){
		return suma;
	}
	if (name == 'r'){
		return resta;
	}
	if (name == 'm'){
		return multiplicacion;
	}
}

int (*getF(char name))(int a, int b){//Opcion 2
	if (name == 's'){
			return suma;
	}
	if (name == 'r'){
		return resta;
	}
	if (name == 'm'){
		return multiplicacion;
	}
}

template <class T, class Func>//Opcion 3
T doTemplateFunction(T a, T b, Func F){
	return F(a,b);
}

template <class Function>
Function getTemplateOperation(char name){//Opcion 4
	if (name == 's'){
			return suma;
	}
	if (name == 'r'){
		return resta;
	}
	if (name == 'm'){
		return multiplicacion;
	}
}*/

int main(int argc, char *argv[]) {
	cout << execute(4, 2, suma) << endl;
	cout << execute(4, 2, resta) << endl;
	cout << execute(4, 2, multiplicacion) << endl;
	/*cout << getFunction('s')(2, 2) << endl;
	cout << getF('r')(2, 2) << endl;
	cout << doTemplateFunction(3, 5, suma<int>)<< endl;
	cout << getTemplateOperation<int(*)(int, int)>('s')(2,2)<< endl;*/
	return 0;
}