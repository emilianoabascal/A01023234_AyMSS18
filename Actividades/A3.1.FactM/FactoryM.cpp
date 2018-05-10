#include <iostream>

using namespace std;


class Product{
	public:
		virtual void operacion1() = 0;
		virtual void operacion2() = 0;
};
class Producto1 : public Product{
	void operacion1(){
		cout << "Estoy en la operacion 1 Prod 1" << endl;
	}
	void operacion2(){
		cout << "Estoy en la operacion 2 Prod 1" << endl;
	}
};

class Producto2 : public Product{
	void operacion1(){
		cout << "Estoy en la operacion 1 Prod 2" << endl;
	}
	void operacion2(){
		cout << "Estoy en la operacion 2 Prod 2" << endl;
	}
};

class Creator{
	public:
	virtual Product* factoryMethod(int) = 0;
	Product* createProduct(int tipo){
		Product* myProduct = factoryMethod(tipo);
		myProduct -> operacion1();
		myProduct -> operacion2();
		return myProduct;

	}
};

class ConcreteCreator: public Creator{
	Product* factoryMethod(int tipo){
		if (tipo == 1){
			return new Producto1;
		}else{
			return new Producto2;
		}
	}
};


int main() {
	Creator* cliente = new ConcreteCreator();
	Product* miProducto = cliente -> createProduct(1);
	Product* miProducto2 = cliente -> createProduct(2);
	return 0;
}