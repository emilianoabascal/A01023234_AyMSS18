#include <iostream>
#include <ctime>

using namespace std;
class Clock{
	public:
		time_t now;
		char* dt;
		void timeReturner();
		static Clock* getInstance();
		static Clock* deleteInstance();
	private:
		//static Clock* instance;
		static Clock* instance;
		Clock();
		~Clock();
};

Clock* Clock:: instance = NULL;//Inicializacion de la instancia estatica (Fuera de la clase)

Clock* Clock::getInstance(){
	if(instance == 0){
		instance = new Clock;
	}
	return instance;
}
Clock* Clock::deleteInstance(){
	if(instance != NULL){
		delete instance;
		instance = NULL;
	}
	return instance;
}

Clock::Clock(){
	now = time(0);
	dt = ctime(&now);
}

Clock:: ~Clock(){}

void Clock:: timeReturner(){
	cout << dt;
}

int main(){
	Clock *instance1 = Clock:: getInstance();
	instance1 -> timeReturner();
	instance1 -> deleteInstance();
	return 0;
}