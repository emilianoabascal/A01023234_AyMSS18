#include <iostream>

using namespace std;

template <int n>
class Repeat: public Repeat<n + 1>{
	public:
		Repeat(){
			cout << n << endl;
		}
};
template <>
class Repeat<100>{
	public:
		Repeat(){
			//cout << n;
		}
};

int main(int argc, char *argv[]) {
	Repeat<0> r;
}