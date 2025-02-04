{
	/**
	 * Type Aliases은
	 * 새로운 타입을 사용자가 정의 할수 있습니다.
	 * 그리고 원시타입 뿐만 아니라, object 형태도 정의 할수 있습니다. 
	 */
	type Text = string;
	const name: Text = 'Triplex';
	const address: Text = 'korea';
	type Num = number;
	type Student = {
		name: string,
		age: number
	};
	const student: Student = {
		name: 'Triplexlab',
		age: 20
	};

	/**
	 * String Literal Types
	 * 다양한 원시타입 또는 object 또는 실제로 값 자체를 타입으로 결정할수가 있습니다.
	 * (이것은 union 타입을 사용할때 빛을 바랍니다.) 
	 */
	type Name = 'name'; //Name이라는 타입에는 'name'이라는 문자열을 쓴다고 지정 할수 있습니다.
	let younhoName: Name;
	younhoName = 'name';
	type JSON = 'json'; //JSON이라는 타입에는 'json'이라는 문자열을 쓴다고 지정 할수 있습니다.
	const json: JSON = 'json';
	
	type Boal = true;
	const isCat: Boal = true;
}