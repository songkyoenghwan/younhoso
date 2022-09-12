{
	// Array
	const fruits: string[] = ['😼', '🤲', '🦶'];
	const scroes: Array<number> = [1, 3, 5];
	function printArray(fruits: readonly string[]){ //✅readonly를 하면 함수 내부에서 배열을 변경할수 없게 됩니다.
		fruits.push()
	}

	// Tuple은 배열인데 서로 다른 타입을 함께 가질수 있는 배열입니다.
	// 무언가 동적으로 리턴하는데, interface 혹은 class로 묶이 애매하고, 사용자가 이름을 정의해서 쓸 경우에는 Tuple이 유용하다.
	// 하지만 그 외에 다른 경우라면 왠만하면 먼저 interface 혹은 class로 사용하는것을 추천합니다.
	let student: [string, number];//(이런식으로 서로 다른 타입을 함께 쓸수 있다.)
	student = ['name', 123];
	student[0]; //name ❌ 0로 접근하는 방식은 코드의 가독성이 떨어짐
	student[1]; //123 ❌ 1로 접근하는 방식은 코드의 가독성이 떨어짐
	const [name, age] = student; //✅이런식으로 object Destructuring을 하면 가독성문제는 해결됩니다.
}