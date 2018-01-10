#include <iostream>
#include <ctime>

using namespace std;

class Clock{
	public:
		time_t now;
		char* dt;
		void timeReturner();
		static Clock* getInstance();
	private:
		static Clock* instance;
		Clock();
};

Clock* Clock:: instance = 0;//Inicializacion de la instancia estatica (Fuera de la clase)

Clock* Clock::getInstance(){
	if(instance == 0){
		instance = new Clock;
	}
	return instance;
}

Clock::Clock(){
	now = time(0);
	dt = ctime(&now);
}

void Clock:: timeReturner(){
	cout << dt;
}

int main(){
	Clock *prueba = Clock:: getInstance();
	prueba -> timeReturner();
	cout << prueba << endl;
	return 0;
}