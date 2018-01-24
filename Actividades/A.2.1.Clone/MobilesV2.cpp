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
class ClaseDerivada:public B{
	public:
		Mobiles* clone(){
			return new A(static_cast<A&> (*this));
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
		Smartphone(const Smartphone& m){
			marca = m.marca;
			SN = m.SN;
			modelo = m.modelo;
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
		Smartwatch(){}
		Smartwatch(const Smartwatch& m){
			marca = m.marca;
			SN = m.SN;
			modelo = m.modelo;
		}
};

int main(){
	Tablet* t = new Tablet("Samsung", "12341234", "TS3", "2");
	Tablet* t2 = new Tablet("Apple", "12341234", "iPAD", "3");
	Smartphone* sp = new Smartphone("Samsung", "12341234", "S9", "5");
	Smartphone* sp2 = new Smartphone("Apple", "12341234", "iPhone", "10");
	Smartwatch* sw = new Smartwatch("Samsung", "12341234", "LocoshonWash", "1");
	Smartwatch* sw2 = new Smartwatch("Apple", "12341234", "Apple Watch", "4");
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