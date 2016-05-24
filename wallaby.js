module.exports = function (wallaby) {

	return {
		files: [
			'src/**/*.ts',
			'!src/**/*.spec.ts'
		],
		tests: [
			'src/**/*.spec.ts'
		],
		compilers: {
			'**/*.ts': wallaby.compilers.typeScript()
		},
		testFramework: 'jest',		
		env: {
			type: 'node',
			runner: 'node'
		},		
		debug : true,
		setup: function (wallaby) {			
			wallaby.testFramework.configure({
				automock: false,
				moduleFileExtensions:["js","json","ts"],
				testDirectoryName:"src"				
			});
		}
	};
};