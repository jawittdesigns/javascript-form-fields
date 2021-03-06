import attributes from '../utils/attributes';

const email = args => {
	let output = '';

	if (args !== undefined) {
		const attrs = attributes(args.attrs);
		const label = args.label !== undefined ? args.label : null;
		output = `<input type="email" ${attrs.output}>`;

		if (label !== null) {
			const labelAttrs = attributes(label, attrs.id, true);
			const labelText = label.text !== undefined ? label.text : '';

			output = `<label${labelAttrs.output}>${labelText}</label>${output}`;
		}
	}

	return output;
};

export default email;
