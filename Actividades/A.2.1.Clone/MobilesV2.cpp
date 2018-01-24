//Emiliano Abascal Gurria
#include <iostream>
#include <string>

using namespace std;

class Mobiles{
	public:
		string *marca;
		string *SN;
		string modelo;
		string version;
		virtual Mobiles* clone() = 0;
		Mobiles(){}
		
		Mobiles(string marca, string SN, string version, string modelo):marca(new string(marca)), SN(new string(SN)), version(version), modelo(modelo){
			cout << "Parametros " << marca << endl;
		}
		void encender(){
			cout << "El dispositivo " <<modelo<< " se prendio" << endl;
		}
		void apagar(){
			cout << "El dispositivo " <<modelo<< " se apago" << endl;
		}
		void reiniciar(){
			cout << "El dispositivo " <<modelo<< " se reinicio" << endl;
		}
		void restaurar(){
			cout << "El dispositivo " <<modelo<< " se restauro" << endl;
		}
};

template<class A, class B>
class ClaseDerivada: public B{
	public:
		B* clone(){
			
			return new A(dynamic_cast<A&> (*this));
		}
		ClaseDerivada(){}
};

class Tablet:public ClaseDerivada<Tablet, Mobiles>{
	
	public:
		Tablet(string m, string s, string mod, string ver){
			marca = &m;
			SN = &s;
			modelo = mod;
			version = ver;
		}
		Tablet(){}
		
		Tablet(const Tablet& m){
			marca = m.marca;
			SN = m.SN;
			modelo = m.modelo;
		}
};

class Smartphone: public ClaseDerivada<Smartphone, Mobiles>{
	public: 
		Smartphone(string m, string s, string mod, string ver){
			marca = &m;
			SN = &s;
			modelo = mod;
			version = ver;
		}
		Smartphone(){}
		Smartphone(const Mobiles& m){
			marca = m.marca;
			SN = m.SN;
			modelo = m.modelo;
			version = m.version;
		}
};

class Smartwatch: public ClaseDerivada<Smartwatch, Mobiles>{
	public:
		Smartwatch(string m, string s, string mod, string ver){
			marca = &m;
			SN = &s;
			modelo = mod;
			version = ver;
		}
		void doStuff(){
			cout << "hola";
		}
		Smartwatch(){}
		Smartwatch(const Smartwatch& m){
			marca = m.marca;
			SN = m.SN;
			modelo = m.modelo;
		}
};

int main(){
	Mobiles* t = new Tablet("Samsung", "12341234", "TS3", "2");
	Mobiles* t2 = new Tablet("Apple", "12341234", "iPAD", "3");
	Mobiles* sp = new Smartphone("Samsung", "12341234", "S9", "5");
	Mobiles* sp2 = new Smartphone("Apple", "12341234", "iPhone", "10");
	Mobiles* sw = new Smartwatch("Samsung", "12341234", "LocoshonWash", "1");
	Mobiles* sw2 = new Smartwatch("Apple", "12341234", "Apple Watch", "4");
	t->encender();
	t->apagar();
	t->restaurar();
	t->reiniciar();
	t2->encender();
	t2->apagar();
	t2->restaurar();
	t2->reiniciar();
	sp->encender();
	sp->apagar();
	sp->restaurar();
	sp->reiniciar();
	sp2->encender();
	sp2->apagar();
	sp2->restaurar();
	sp2->reiniciar();
	sw->encender();
	sw->apagar();
	sw->restaurar();
	sw->reiniciar();
	sw2->encender();
	sw2->apagar();
	sw2->restaurar();
	sw2->reiniciar();	
	return 0;
}