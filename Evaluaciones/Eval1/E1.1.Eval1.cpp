#include <iostream>
#include <string>
#include <fstream>  
#include <cstdlib>
#include <vector>

using namespace std;
vector<string> id;
vector<string> cusname;
vector<string> cuslast;
vector<string> comtype;
vector<string> phone;
vector<string> mail;
vector<string> street;
vector<string> number;
vector<string> colony; //Solo asi pude, perdon ariel D: la deshonra vive en mi.
int i = 0;
	
class Command{
public:
	virtual void execute(string tipo) = 0;
};

class Receiver{
public:
	void sendMail(){
		cout <<"MAIL:" << endl <<"From: Empresa@gmail.com"<<endl<<"to: "<<mail[i] <<endl<<  "Message: Cambiamos de servicios." << endl << endl;
		}
	void sendSms(){
		cout <<"SMS:" << endl <<"to: "<<phone[i] <<endl<<  "Message: Cambiamos de servicios." << endl << endl;
		}
	void phoneCall(){
		cout <<"Call made"<<endl<<"to: "<<phone[i] <<"."<< endl << endl;
		}
};

class Caller{
private:
	Command *cmd;
public:
	void setCommand(Command *cmd_temp) 
	{
		cmd = cmd_temp;
	}
	void executeAction(string tipo) 
	{
		cmd->execute(tipo);
	}

};

class ConcreteCommand : public Command {
private:
	Receiver *r;
public:
	ConcreteCommand(Receiver *r_temp) : r(r_temp) {}
	void execute(string tipo){
		if (tipo == "mail") {
			r -> sendMail();
		}
		if (tipo == "phone") {
			r -> phoneCall();
		}
		if (tipo == "sms") {
			r -> sendSms();
		}
	}
};

class Client{
	public:
		void readFile(string file){
			int i = 0;//Variable iteradora.
			fstream archivo;//Se instancia el archivo.
			archivo.open(file);//Es una funcion que abre el archivo con el nombre del parametro de la funcion.
			string line;//String que hace referencia al valor de cada renglon del archivo.
			while(!archivo.eof()){
				getline(archivo, line, ',');
				id.push_back(line);					
				getline(archivo, line, ',');
				cusname.push_back(line);
				getline(archivo, line, ',');
				cuslast.push_back(line);
				getline(archivo, line, ',');
				comtype.push_back(line);
				getline(archivo, line, ',');
				mail.push_back(line);
				getline(archivo, line, ',');
				phone.push_back(line);
				getline(archivo, line, ',');
				street.push_back(line);
				getline(archivo, line, ',');
				number.push_back(line);
				getline(archivo, line, '\n');
				colony.push_back(line);
				i++;
			}
		}
		Client(){}
		void sender(){
			Receiver *r = new Receiver;
			ConcreteCommand *cmd = new ConcreteCommand(r);
			Caller *caller = new Caller;
			caller->setCommand(cmd);
			for(i = 0; i <= id.size(); i++){
				if(comtype[i] == "phone"){
					caller->executeAction("phone");
				}
				if(comtype[i] == "mail"){
					caller->executeAction("mail");
				}
				if(comtype[i] == "sms"){
					caller->executeAction("sms");
				}
			}
		}
};

int main() {
	Client* test = new Client;
	test -> readFile("archivo.txt");
	test-> sender();
	return 1;
}