var MyArr = [3, 5, 2];

function forEach(MyArr, el){
	for (var index = 0; index < MyArr.length; ++index) {
		//console.log((MyArr[index])+ " Функція forEach");
		//MyArr[index] = Number(MyArr[index] + [1]);
		el(MyArr[index]);
	};
};


function el(){
	return(MyArr[index]);
};