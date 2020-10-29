export default {
	input: 'src/index.js',
	output: [
		{
			format: 'umd',
			name: 'totkit',
			file: 'build/totkit.js',
			indent: '\t'
		},
		{
			format: 'es',
			name: 'totkit',
			file: 'build/totkit.module.js',
			indent: '\t'
		}
	]
};