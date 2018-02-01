import simpleCounter from './component1'

let componentArr = [
	simpleCounter
]

let components = [];

for (let i = 0; i < componentArr.length; i++) {
	components = components.concat(componentArr[i]);
}

export default components;