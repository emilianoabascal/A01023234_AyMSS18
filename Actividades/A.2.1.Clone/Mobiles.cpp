#include <iostream>
#include <string>

using namespace std;

class Mobiles{
	public:
		string *marca;
		string *SN;
		virtual Mobiles* clone() = 0;
		Mobiles(){}
		
		Mobiles(string marca, string SN):marca(new string(marca)), SN(new string(SN)){
			cout << "parametros " << marca << " " << SN << endl;
		}
		void encender(){
			cout << "El dispositivo " <<*marca<< " se prendio" << endl;
		}
		void apagar(){
			cout << "El dispositivo " <<*marca<< " se apago" << endl;
		}
		void reiniciar(){
			cout << "El dispositivo " <<*marca<< " se reinicio" << endl;
		}
		void restaurar(){
			cout << "El dispositivo " <<*marca<< " se restauro" << endl;
		}

};

class Tablet:public Mobiles{
	public:
		Tablet(string marca, string SN): Mobiles (marca, SN){
			
		}
		Mobiles* clone(){
			return new Tablet(*this);
		}
};

class Smartphone:public Mobiles{
public:
		Smartphone(string marca, string SN): Mobiles (marca, SN){
			
		}
		Mobiles* clone(){
			return new Smartphone(*this);
		}	
};

class Smartwatch:public Mobiles{
public:
		Smartwatch(string marca, string SN): Mobiles (marca, SN){
			
		}
		Mobiles* clone(){
			return new Smartwatch(*this);
		}	
};

int main(){
	Tablet* t = new Tablet("Samsung", "123erfw41234");
	Tablet* t2 = new Tablet("Apple", "12341asdfadf234");
	Smartphone* sp = new Smartphone("Samsung", "12341adfa234");
	Smartphone* sp2 = new Smartphone("Apple", "12341asdfa234");
	Smartwatch* sw = new Smartwatch("Samsung", "1234df1234");
	Smartwatch* sw2 = new Smartwatch("Apple", "1234dfasdf1234");
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
}