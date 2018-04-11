#include <iostream>
#include <vector>
#include <string>
using namespace std;
class Videojuego{
	public:
		string *nombre;
		int *numeroDeSerie;
		int *juegosDisponibles;
		int *precio;

		virtual Videojuego* clone() = 0;
		
		Videojuego(string nombre, int numeroDeSerie, int juegosDisponibles, int precio):nombre(new string(nombre)), numeroDeSerie(new int(numeroDeSerie)), juegosDisponibles(new int(juegosDisponibles)), precio(new int(precio)){
			cout << "parametros " << nombre << " " << numeroDeSerie << endl;
		}
		void concepcion(){
			cout << "Juego se conceptuo" << endl;
		}
		void diseno(){
			cout << "Juego se diseno" << endl;
		}
		void planificacion(){
			cout << "Juego se planeo" << endl;
		}
		void produccion(){
			cout << "Juego se produjo" << endl;
		}
		void pruebasDeAceptacion(){
			cout << "Juego se probo" << endl;
		}
};



class Estrategia:public Videojuego{
	public:
		Estrategia(string nombre, int numeroDeSerie, int juegosDisponibles, int precio): Videojuego (nombre,numeroDeSerie,  juegosDisponibles, precio){
			
		}
		Videojuego* clone(){
			return new Estrategia(*this);
		}
};

class Aventura:public Videojuego{
	public:
		Aventura(string nombre, int numeroDeSerie, int juegosDisponibles, int precio): Videojuego (nombre,numeroDeSerie,  juegosDisponibles, precio){
			
		}
		Aventura* clone(){
			return new Aventura(*this);
		}
};

class Aprendizaje:public Videojuego{
	public:
		Aprendizaje(string nombre, int numeroDeSerie, int juegosDisponibles, int precio): Videojuego (nombre,numeroDeSerie,  juegosDisponibles, precio){
			
		}
		Aprendizaje* clone(){
			return new Aprendizaje(*this);
		}
};

vector<Videojuego*> almacen;
vector<Videojuego*> temporal;

typedef void(*f)();//Opcion 1
template <class type> type undo(){
	for(int i = temporal.size(); i>0; i--){
		almacen.push_back(temporal[i-1]);
		temporal.erase(temporal.begin() + i-1);
		break;
	}
}
template <class type> type redo(){
	for(int i = almacen.size(); i>0; i--){
		temporal.push_back(almacen[i-1]);
		almacen.erase(almacen.begin() + i-1);
		break;
	}
}

void execute(void(*f)()){//opcion 0
	return f();
}


class Almacen{
	
public:
	Almacen(){
		
	}
	void agregarJuego(Videojuego* v){
		almacen.push_back(v);
		
	}
	void eliminarJuego(string nombre){
		for(int i = 0; i <= almacen.size(); i++){
			if(nombre == *almacen[i]->nombre){
				temporal.push_back(almacen[i]);
				almacen.erase(almacen.begin() + i);
				break;
			}
		}
	}
	void sort1(){
		int length = almacen.size();
			for (int i = 0; i < length; ++i){
				int min = i;
				for (int j = i+1; j < length; ++j){
					if (*almacen[j] -> precio < *almacen[min]-> precio){
						min = j;
					}
				}

				if (min != i){
					swap(almacen, i, min);
				}
			}
	}
	
	void sort2(){
			int length = almacen.size();
				for (int i = 0; i < length; ++i){
					int min = i;
					for (int j = i+1; j < length; ++j){
						if (*almacen[j] -> precio > *almacen[min]-> precio){
							min = j;
						}
					}

					if (min != i){
						swap(almacen, i, min);
					}
				}
		}
		
	void print(){
			for(int i = 0; i<almacen.size(); i++){
				cout << "Nombre " << *almacen[i] -> nombre << "		Precio: $" << *almacen[i] -> precio << "		Juegos Disponibles: " << *almacen[i] -> juegosDisponibles << "		Numero de serie: " << *almacen[i] -> numeroDeSerie <<  endl;
			}
			cout << endl;
		}
	
	void swap(std::vector<Videojuego*> & data, int i, int j)
	{
		Videojuego* tmp = data[i];
		data[i] = data[j];
		data[j] = tmp;
	}
	
};

int main(int argc, char *argv[]) {
	Estrategia* t = new Estrategia("zombis", 1234567890, 10, 500);
	Estrategia* s = new Estrategia("lel", 1234567891, 10, 100);
	Estrategia* x = new Estrategia("lel2", 1234567821, 10, 200);
	Almacen* a = new Almacen();
	a-> agregarJuego(t);
	a-> agregarJuego(s);
	a-> agregarJuego(x);
	a-> sort2();
	a-> sort1();
	a -> print();
	a-> eliminarJuego("lel2");
	a -> print();
	execute(undo);
	a -> print();
	execute(redo);
	a -> print();
}