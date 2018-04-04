#include <vector>
#include <iostream>
#include <string>

using namespace std;
class Observer{
	public:
    	virtual void update(string anuncio) = 0;
};


class MVS : public Observer{
	private:
		string noticiero;

	public:	
		MVS(string n){ noticiero = n; }
    	void update(string anuncio){
    		cout << "\t - Noticieros " << noticiero << ": " << anuncio << endl;
    	}       
};

class Televisa : public Observer{
	private:
		string noticiero;

	public:
		Televisa(string n){ noticiero = n; }
    	void update(string anuncio){
    		cout << "\t - Noticieros " << noticiero << ": " << anuncio << endl;
    	}          
};

class AztecaNoticias : public Observer{
	private:
		string noticiero;

	public:
		AztecaNoticias(string n){ noticiero = n; }
    	void update(string anuncio){
    		cout << "\t - Noticieros " << noticiero << ": " << anuncio << endl;
    	}
		string regresaNombre(){
			return noticiero;
		}
};


class Subject{
   vector<Observer*> list;
public:
	Subject() = default;
    void attach(Observer* observer){
    	list.push_back(observer);
    }
	void dettach(Observer* observer){
		for(int i = 0; i<=list.size(); i++){
			if(list[i] == observer){
				list.erase(list.begin() + i);
				break;
			}
			if(list[i] != observer && list.size() == i){
				cout << "No se ha agregado el elemento";
			}
		}
	}
    
    void notifyAll(string anuncio){
    	for(int i = 0; list.size()>i; i++){
        	list[i]->update(anuncio);
        }
    }
};

class Trump : public Subject{
public:
	Trump() = default;
    void anuncia(string anuncio){
    	notifyAll(anuncio);
    }
};

class Anaya : public Subject{
public:
	Anaya() = default;
	void anuncia(string anuncio){
		notifyAll(anuncio);
	}
};

class Meade : public Subject{
public:
	Meade() = default;
	void anuncia(string anuncio){
		notifyAll(anuncio);
	}
};

class Zavala : public Subject{
public:
	Zavala() = default;
	void anuncia(string anuncio){
		notifyAll(anuncio);
	}
};

class AMLO : public Subject{
public:
	AMLO() = default;
	void anuncia(string anuncio){
		notifyAll(anuncio);
	}
};

int main(){
	// Observer
	MVS* mvs = new MVS("MVS");
	Televisa* televisa = new Televisa("Televisa");
	AztecaNoticias* aztecaNoticias = new AztecaNoticias("TV Azteca alv");

	// Subject
	Trump* trump = new Trump();
	Anaya* anaya = new Anaya();
	Meade* meade = new Meade();
	AMLO* amlo = new AMLO();
	Zavala* zavala = new Zavala();

	// Pasa el anuncio
	trump->attach(mvs);
	trump->attach(televisa);
	trump->attach(aztecaNoticias);
	anaya->attach(mvs);
	anaya->attach(televisa);
	anaya->attach(aztecaNoticias);
	anaya -> dettach(televisa);
	meade->attach(mvs);
	meade->attach(televisa);
	meade->attach(aztecaNoticias);
	amlo->attach(mvs);
	amlo->attach(televisa);
	amlo->attach(aztecaNoticias);
	zavala->attach(mvs);
	zavala->attach(televisa);
	zavala -> dettach(aztecaNoticias);

	// Notificaciones - Actualizaciones
	cout << endl << "Trump" << endl;
	trump->notifyAll("F*ck the beaners");

	cout << endl << "Anaya" << endl;
	anaya->notifyAll("Cual tranza?");

	cout << endl << "El Diablo" << endl;
	amlo->notifyAll("Yo joy el lehitimo.");
	cout << endl;
	
	cout << endl << "Zavala" << endl;
	zavala->notifyAll("mi wey anda bien borrasho");
	cout << endl;
	
	cout << endl << "Meade" << endl;
	meade->notifyAll("Tengo la cara bien rara");
	cout << endl;

}
