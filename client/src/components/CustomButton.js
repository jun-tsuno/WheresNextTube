import classNames from 'classnames';

const CustomButton = ({ children, primary, secondary, ...rest }) => {
	const btnClass = classNames(
		rest.className,
		'font-medium rounded-md border-2 border-gray-500 py-2 px-3 w-full',
		{
			'border-teal-600 text-teal-600 hover:bg-lime-50': primary,
			'border-violet-400': secondary,
		}
	);
	return (
		<>
			<button {...rest} className={btnClass}>
				{children}
			</button>
		</>
	);
};

export default CustomButton;
