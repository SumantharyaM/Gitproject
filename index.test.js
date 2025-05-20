const sayHello = require('../index');

const result = sayHello('Jenkins');
if (result === 'Hello, Jenkins!') {
	  console.log('✅ Test passed');
	  process.exit(0);
} else {
	  console.error('❌ Test failed');
	  process.exit(1);
}

