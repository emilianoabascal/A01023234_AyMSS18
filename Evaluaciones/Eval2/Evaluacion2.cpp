#include <string>
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
class Videojuego;
class Observer;
class Observer{
public:
	virtual void update(string, Videojuego*) = 0;
};

class Visitor;
class Videojuego{
	private:
	public:
		string nombre;
		int juegosDisponibles;
		int numeroDeSerie;
		string fechaDeLanzamiento;
		vector<Observer*> observers;
		virtual Videojuego* clone() = 0;
		Videojuego() {}
		Videojuego(string t, int p, string fl, int s): nombre(t),juegosDisponibles(p), fechaDeLanzamiento(fl),numeroDeSerie(s){
			
		}
		void Planeacion(){
			cout << nombre << " Planeacion ..." << "\n";
		}
		void Produccion(){
			cout << nombre << " Produccion ..." << "\n";
		}
		void Concepto(){
			cout << nombre << " Concepto ..." << "\n";
		}
		void Diseno(){
			cout << nombre << " Diseno ..." << "\n";
		}
		void PruebasDeCalidad(){
			cout << nombre << " Pruebas de calidad..." << "\n";
		}
		virtual void acepta(Visitor*) = 0;
		void attach(Observer* o){
			observers.push_back(o);
		}
		void dettach(Observer* o){
			for(int i = 0; i < observers.size();i++){
				if(observers[i] == o){
					observers.erase(observers.begin()+i);
					return;
				}
			}
		}
		void notifyAll(string release, Videojuego* v){
			for(int i = 0; i < observers.size(); i++){
				observers[i]->update(release, v);
			}
		}
		bool operator < (const Videojuego& cmp) const{
			return (juegosDisponibles < cmp.juegosDisponibles);
		}
		bool operator > (const Videojuego& cmp) const{
			return (juegosDisponibles > cmp.juegosDisponibles);
		}
};

template<class Base, class SubClass>
class CloneFunction: public Base{
public:
	Base* clone(){
		return new SubClass(dynamic_cast<SubClass&> (*this));
	}
};

class Estrategia : public CloneFunction<Videojuego,Estrategia>{
public:
	string* genero;
	string* creador;
	string* numeroDeJugadores;
	Estrategia() { }
	Estrategia(string n, int p, string fl, int s){
		nombre = n;
		juegosDisponibles = p;
		fechaDeLanzamiento = fl;
		numeroDeSerie = s;
		notifyAll(fl, this);
	}
	Estrategia(const Estrategia& temp){
		nombre = temp.nombre;
		juegosDisponibles = temp.juegosDisponibles;
		fechaDeLanzamiento = temp.fechaDeLanzamiento;
		numeroDeSerie = temp.numeroDeSerie;
		notifyAll("Nuevo " + fechaDeLanzamiento, this);
	}
	Videojuego* clone(){
		return new Estrategia(*this);
	}
	void acepta(Visitor* visitor);
};

class Aprendizaje:public CloneFunction<Videojuego,Aprendizaje>{
public:
	bool* enLinea;
	string* compatibilidad;
	string* temaAAprender;
	Aprendizaje(string t, int p, string fl, int s){
		nombre = t;
		juegosDisponibles = p;
		fechaDeLanzamiento = fl;
		numeroDeSerie = s;
		notifyAll(fl, this);
	}
	Aprendizaje(const Aprendizaje& temp){
		nombre = temp.nombre;
		juegosDisponibles = temp.juegosDisponibles;
		fechaDeLanzamiento = temp.fechaDeLanzamiento;
		numeroDeSerie = temp.numeroDeSerie;
		notifyAll("Nuevo " + fechaDeLanzamiento, this);
	}
	Videojuego* clone(){
		return new Aprendizaje(*this);
	}
	void acepta(Visitor* visitor);
};

class Survival:public CloneFunction<Videojuego,Survival>{
public:
	bool* aptoParaNinos;
	string* plataformasCompatibles;
	string* personajePrincipal;
	Survival(string t, int p, string fl, int s){
		nombre = t;
		juegosDisponibles = p;
		fechaDeLanzamiento = fl;
		numeroDeSerie = s;
		notifyAll(fl, this);
	}
	Survival(const Survival& temp){
		nombre = temp.nombre;
		juegosDisponibles = temp.juegosDisponibles;
		fechaDeLanzamiento = temp.fechaDeLanzamiento;
		numeroDeSerie = temp.numeroDeSerie;
		notifyAll("Nuevo " + fechaDeLanzamiento, this);
	}
	Videojuego* clone(){
		return new Survival(*this);
	}
	void acepta(Visitor* visitor);
};


class Visitor{
public:
	virtual void visit(Estrategia&) = 0;
	virtual void visit(Aprendizaje&) = 0;
	virtual void visit(Survival&) = 0;
	
	
};

class DecrementVisitor: public Visitor{
public:
	void visit(Estrategia& s){
		cout << s.juegosDisponibles;
		s.juegosDisponibles = s.juegosDisponibles / 1.1;
	}
	void visit(Survival& a){
		cout << a.juegosDisponibles;
		a.juegosDisponibles = a.juegosDisponibles / 1.1;
	}
	void visit(Aprendizaje& l){
		l.juegosDisponibles = l.juegosDisponibles / 1.1;
	}

};

class IncrementVisitor : public Visitor{
public:
	void visit(Estrategia& s){
		s.juegosDisponibles = s.juegosDisponibles * 1.1;
	}
	void visit(Survival& a){
		a.juegosDisponibles = a.juegosDisponibles * 1.1;
	}
	void visit(Aprendizaje& l){
		l.juegosDisponibles = l.juegosDisponibles * 1.1;
	}
};

void Aprendizaje::acepta(Visitor* visitor){
	visitor->visit(*this);
}
void Estrategia::acepta(Visitor* visitor){
	visitor->visit(*this);
}
void Survival::acepta(Visitor* visitor){
	visitor->visit(*this);
}


class Creator{
private:
	static Creator* instance;
	static int cont;
	static void agregarReferencia(){
		++cont;
	}
	static void eliminarReferencia(){
		--cont;
	}
	Creator(){
		cout << "LEL Creador";
	}
	~Creator(){
		cout << "Destructor del que crea";
	}
public:
	static Creator* getInstance(){
		if(instance == nullptr){
			instance = new Creator;
		}
		agregarReferencia();
		return instance;
	}
	static void destoryInstance(){
		eliminarReferencia();
		if(instance != nullptr && cont == 0){
			delete instance;
			instance = nullptr;
		}
	}
	template<class J>
	J* factoryMethod(string t, int p, string fl, int s){
		return new J(t,p,fl,s);
	}
	template<class J>
	J* create(string t, int p, string fl, int s){
		J* juego = factoryMethod<J>(t,p,fl,s);
		juego->Concepto();
		juego->Diseno();
		juego->Planeacion();
		juego->Produccion();
		juego->PruebasDeCalidad();
		return juego;
	}
};
Creator* Creator::instance = nullptr;
int Creator::cont = 0;

class Usuario : public Observer{
public:
	string nombre;
	Usuario(string n){ nombre = n; }
	void update(string r, Videojuego *v){
		cout << nombre << ": El juego " << v->nombre << " me hace muy feliz.\n";
	}
};

class Almacen{
public:
	vector<Videojuego*> almacen;
	
	vector<Videojuego*> temporalUndo;
	Almacen(){}
	
	void agregarJuego(Videojuego* v){
			almacen.push_back(v);
		}
	
	void eliminarJuego(string n){
		for(int i = 0; i < almacen.size(); i++){
			if (almacen[i]->nombre == n){
				temporalUndo.push_back(almacen[i]);
				almacen.erase(almacen.begin() + i);
				cout << "El juego se elimino "<< endl;
				break;
			}else if(i == almacen.size()){
				cout << "El juego que se quizo eliminar no esta"<< endl;
			}
		}
	}
	
	void eliminarJuego(int numeroDeSerie){
		for(int i = 0; i < almacen.size(); i++){
			if (almacen[i]->numeroDeSerie == numeroDeSerie){
				temporalUndo.push_back(almacen[i]);
				almacen.erase(almacen.begin() + i);
				cout << "El juego se elimino "<< endl;
				break;
			}else if(i == almacen.size()){
				cout << "El juego que se quizo eliminar no esta"<< endl;
			}
		}
	}
	void undo(){
		almacen.push_back(temporalUndo[temporalUndo.size() - 1]);
		temporalUndo[temporalUndo.size() - 1];
	}
	void redo(){
		for(int i = almacen.size(); i>0; i--){
			temporalUndo.push_back(almacen[i-1]);
			almacen.erase(almacen.begin() + i-1);
			break;
		}
	}
	void sortv(bool x){
		if(x)
			sort(almacen.begin(), almacen.end());
		else
			sort(almacen.begin(), almacen.end(),greater<Videojuego*>());
	}
	void buscaJuego(int numeroDeSerie){
		if(almacen.size() == 0){
			cout << endl << "No hay juegos en el almacen" << endl;
		}else{
			for(int i = 0; i < almacen.size(); i++){
				if (almacen[i]->numeroDeSerie == numeroDeSerie){
					cout << "Juego #" << i << "	nombre: " << almacen[i]->nombre << "	Juegos disponibles: " << almacen[i]->juegosDisponibles << "		Fecha de Lanzamiento: " <<   almacen[i]->fechaDeLanzamiento << "	Numero De Serie: " << almacen[i]->numeroDeSerie << endl << endl;
				}
				else
					cout << "No se encontro el juego"<< endl;
			}
		}
	}
	void buscaJuego(string t){
		if(almacen.size() == 0){
			cout << endl << "No hay juegos en el almacen" << endl;
		}else{
			for(int i = 0; i < almacen.size(); i++){
				if (almacen[i]->nombre == t){
					cout << "Juego #" << i << "	nombre: " << almacen[i]->nombre << "	Juegos disponibles: " << almacen[i]->juegosDisponibles << "		Fecha de Lanzamiento: " <<   almacen[i]->fechaDeLanzamiento << "	Numero De Serie: " << almacen[i]->numeroDeSerie << endl << endl;
				}
				else
					cout << "No se encontro el juego"<< endl;
			}
		}
	}
	int numberOfItems(){
		return almacen.size();
	}
	void cambiarjuegosDisponibles(bool juegosDisponiblesAlteration){
		if(juegosDisponiblesAlteration){
			IncrementVisitor* incrementVisitor = new IncrementVisitor;
			acepta(incrementVisitor);
		}
		else{
			DecrementVisitor* decrementvisitor = new DecrementVisitor;
			acepta(decrementvisitor);          
		}
	}
	void printALL(){
		if(almacen.size() == 0){
			cout << endl << "No hay juegos en el almacen" << endl;
		}else{
			for(int i = 0; i < almacen.size(); i++){
				cout << "Juego #" << i << "	nombre: " << almacen[i]->nombre << "	Juegos disponibles: " << almacen[i]->juegosDisponibles << "		Fecha de Lanzamiento: " <<   almacen[i]->fechaDeLanzamiento << "	Numero De Serie: " << almacen[i]->numeroDeSerie << endl << endl;
			}
		}
	}
	void acepta (Visitor* visitor){
		for(int i = 0; i < almacen.size(); i++){
			almacen[i]->acepta(visitor);
		}
	}

	

};

int main () {
	bool menu = true;
	int entrada;
	int vjuegosDisponibles;
	int vserial;
	string vnombre;
	string vfl;
	Almacen* store = new Almacen;
	Videojuego* encontrarJuego;
	cout << "Bienvenido, estas son las siguientes opciones:" <<endl;
	while(menu == true){
		cout << endl << "1: Agregar juegos al almacen" <<endl<< "2: Eliminar juegos al almacen" << endl << "3: Ver los juegos que hay en el almacen" << endl << "4: Ordenarlos" <<endl << "5: Numero de juegos almacenados" << endl << "6: Encontrar un juego(por nombre o sn)" << endl << "7: Cambiar info de un juego" << endl << "8: Deshacer" << endl << "9: rehacer" << endl << "10: Salir" << endl;
		cin >> entrada;
		
		switch (entrada) {
			case 1:
				cout << "Que tipo de juego es" << endl << "1: Survival" << endl << "2: Aprendizaje" <<endl<< "3: Estrategia" << endl;
				cin >> entrada;
				switch (entrada) {
					case 1:
						cout << "Nombre del Juego: ";
						cin >> vnombre;
						cout << "Fecha de lanzamiento: ";
						cin >> vfl;
						cout << "Cuantos juegos hay disponibles del titulo: " ;
						cin >> vjuegosDisponibles;
						cout << "Cual es el numero de serie: " ;
						cin >> vserial;
						encontrarJuego = new Survival(vnombre,vjuegosDisponibles,vfl,vserial);
						store->agregarJuego(encontrarJuego);
						break;
					case 2:
						cout << "Nombre del Juego: ";
						cin >> vnombre;
						cout << "Fecha de lanzamiento: ";
						cin >> vfl;
						cout << "Cuantos juegos hay disponibles del titulo: " ;
						cin >> vjuegosDisponibles;
						cout << "Cual es el numero de serie: " ;
						cin >> vserial;
						encontrarJuego = new Aprendizaje(vnombre,vjuegosDisponibles,vfl,vserial);
						store->agregarJuego(encontrarJuego);
						break;
					case 3:
						cout << "Nombre del Juego: ";
						cin >> vnombre;
						cout << "Fecha de lanzamiento: ";
						cin >> vfl;
						cout << "Cuantos juegos hay disponibles del titulo: " ;
						cin >> vjuegosDisponibles;
						cout << "Cual es el numero de serie: " ;
						cin >> vserial;
						encontrarJuego = new Estrategia(vnombre,vjuegosDisponibles,vfl,vserial);
						store->agregarJuego(encontrarJuego);
						break;
					default: 
						cout << "No es una opcion";
						break;
				}
				break;
				
			case 2:
				cout << "1: Borrar por nombre" << endl << "2: Borrar por numero de serie" << endl;
				cin >> entrada;
				switch (entrada) {
					case 1:
						cout << "Cual es el nombre?: ";
						cin >> vnombre;
						store->eliminarJuego(vnombre);
						break;
					case 2:
						cout << "Cual es el numero de serie?: ";
						cin >> vserial;
						store->eliminarJuego(vserial);
						break;
					default: 
						cout << "No es una opcion";
						break;
				}
				break;
			case 3:
				store->printALL();
				break;
			case 4:
				cout << "1: Precio ascendente" << endl << "2: Precio descendente" << endl;
				cin >> entrada;
				switch (entrada) {
					case 1:
						store->sortv(0);
						break;
					case 2:
						store->sortv(1);
						break;
					default:
						cout << "No es una opcion";
						break;
					}
				
			case 5:
				cout << store->numberOfItems() << endl;
				break;
			case 6:
				cout << "1: Por numero de serie" << endl << "2: Por Nombre: " << endl;
				cin >> entrada;
				switch (entrada) {
					case 1:
						cout << "Cual es el numero de serie?: ";
						cin >> vserial;
						store->buscaJuego(vserial);
						break;
					case 2:
						cout << "Cual es el nombre?: ";
						cin >> vnombre;
						store->buscaJuego(vnombre);
						break;
					default:
						cout << "No es una opcion";
						break;
				}
				break;
			case 7:
				cout << "1. Aumentar juegos disponibles" << endl << "2. Disminuir juegos disponibles" << endl;
				cin >> entrada;
				switch (entrada) {
					case 1:
						store->cambiarjuegosDisponibles(1);
					case 2:
						store->cambiarjuegosDisponibles(0);
					default:
						cout << "No es una opcion";
						break;
				}
				break;
			case 8:
				store->undo();
				break;
			case 9:
				store->redo();
				break;
			case 10:
				menu = false;
				break;
			default:
				cout << "No es una opciosn";
		}
		
		
	}
	
}