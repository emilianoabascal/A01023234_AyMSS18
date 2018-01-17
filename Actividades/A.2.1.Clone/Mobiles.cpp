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
			cout << "params " << marca << endl;
		}
		void encender(){
			cout << "El dispositivo se prendio" << endl;
		}
		void apagar(){
			cout << "El dispositivo se apago" << endl;
		}
		void reiniciar(){
			cout << "El dispositivo se reinicio" << endl;
		}
		void restaurar(){
			cout << "El dispositivo se restauro" << endl;
		}

};

class Tablet: public Mobiles{
	public:
		Tablet(string marca, string SN): Mobiles (marca, SN){
			
		}
		Mobiles* clone(){
			return new Tablet(*this);
		}
};

class Smartphone{
	
};

class Smartwatch{
	
};

int main(){
	Tablet* t = new Tablet("asdfasd", "sdfasdf");
	*(t->marca) = "asd";
	cout << *(t->marca);
	return 0;
}