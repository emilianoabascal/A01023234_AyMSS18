#include <iostream>

using namespace std;

class Printers{
	public:
		string tipo;
		Printers(){}
		Printers(string t):tipo(t){
			
		}
};
class Documents{
	public:
		string nombre;
		void printOn(Printers p){
			cout << "Se imprimio en la impresora " << p.tipo <<"."<<endl;
		}
};


template<class Base, class SubClass>
class CloneFunction: public Base{
public:
	Base* clone(){
		return new SubClass(dynamic_cast<SubClass&> (*this));
	}
};

class Laser : public CloneFunction<Printers,Laser>{
public:
	Laser() {}
	Laser(string t){
		tipo = t;
		//notifyAll(fl, this);
	}
	Laser(const Laser& temp){
		tipo = temp.tipo;
		
		//notifyAll("Nuevo " + fechaDeLanzamiento, this);
	}
	Printers* clone(){
		return new Laser(*this);
	}

};

class Inyeccion : public CloneFunction<Printers,Inyeccion>{
public:
	Inyeccion() {}
	Inyeccion(string t){
		tipo = t;
	}
	Inyeccion(const Inyeccion& temp){
		tipo = temp.tipo;
		
	}
	Printers* clone(){
		return new Inyeccion(*this);
	}

};

class PDF : public CloneFunction<Printers,PDF>{
public:
	PDF() {}
	PDF(string t){
		tipo = t;
		//notifyAll(fl, this);
	}
	PDF(const Laser& temp){
		tipo = temp.tipo;
		
		//notifyAll("Nuevo " + fechaDeLanzamiento, this);
	}
	Printers* clone(){
		return new PDF(*this);
	}

};

class Postscript : public CloneFunction<Printers,Postscript>{
public:
	Postscript() {}
	Postscript(string t){
		tipo = t;
		//notifyAll(fl, this);
	}
	Postscript(const Laser& temp){
		tipo = temp.tipo;
		
		//notifyAll("Nuevo " + fechaDeLanzamiento, this);
	}
	Printers* clone(){
		return new Postscript(*this);
	}

};




class Creator{
private:
	static Creator* instance;
	static int cont;

public:
	Creator(){
		}
	~Creator(){
		}
	static Creator* getInstance(){
		if(instance == nullptr){
			instance = new Creator;
		}
		return instance;
	}
	static void destoryInstance(){
		if(instance != nullptr && cont == 0){
			delete instance;
			instance = nullptr;
		}
	}
	template<class Type>
	Type* factoryMethod(string t){
		return new Type(t);
	}
	template<class Type>
	Type* create(string t){
		Type* d = factoryMethod<Type>(t);
		return d;
	}
};
Creator* Creator::instance = nullptr;
int Creator::cont = 0;
class ConcreteCreator: public Creator{
	public:
		ConcreteCreator(){}
	Printers* factoryMethod(string tipo){
		if (tipo == "Laser"){
			return new Laser;
		}else if (tipo == "Inyeccion"){
			return new Inyeccion;
		}else if (tipo == "PDF"){
			return new PDF;
		}else if (tipo == "Postscript"){
			return new Postscript;
		}
	}
};


void printAllDocuments(Documents** d, int countDocs, Printers** p, int countPrinters){
	for(int i = 0; i<countDocs; i++){
		for(int j = 0; j<countPrinters; j++){
			d[i]->printOn(*p[i]);
		}
	}
}



int main(){
	Creator* cliente = new ConcreteCreator();
	Printers* miProducto = cliente -> create<Printers>("Laser");
	Printers* miProducto2 = cliente -> create<Printers>("Inyeccion");
	Printers* miProducto3 = cliente -> create<Printers>("PDF");
	Printers* miProducto4 = cliente -> create<Printers>("Postscript");
	Documents ** l = new Documents*[4];
	Printers **t = new Printers*[4];
	t[0] = miProducto;
	t[1] = miProducto2;
	t[2] = miProducto3;
	t[3] = miProducto4;
	Documents *z = new Documents();
	Documents *b = new Documents();
	Documents *o = new Documents();
	Documents *m = new Documents();
	l[0] = z;
	l[1] = b;
	l[2] = o;
	l[3] = m;
	
	printAllDocuments(l, 4, t, 4);
}