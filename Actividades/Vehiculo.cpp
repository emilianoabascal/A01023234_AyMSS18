#include <iostream>

using namespace std;
class Vehiculo{
	public:
		virtual void ensamblar() = 0;
		virtual void pintura() = 0;
		virtual void ojalateria() = 0;
		virtual void entrega() = 0;
};

class Producto : public Vehiculo{
	public:
	void ensamblar(){
		cout << "Se ensamblo" << endl;
	}
	void pintura(){
		cout << "Se pinto" << endl;
		
	}
	void ojalateria(){
		cout << "Se ojalatio lolol" << endl;
	}
	void entrega(){
		cout << "Se entrego" << endl << endl;
	}
};


class Creator{
	public:
		template<class Tipo>
		static Tipo* factoryMethod(){
			return new Tipo;
		}
		template<class Tipo>
		static Tipo* create(){
			Tipo* temporal;
			temporal = factoryMethod<Tipo>();
			temporal->ensamblar();
			temporal->pintura();
			temporal->ojalateria();
			temporal->entrega();
			return temporal;
		}
};

int main() {
	Creator *p = new Creator;
	Producto *Nissan = p-> create<Producto>();
	Producto *Dodge = p-> create<Producto>();
	return 0;
}