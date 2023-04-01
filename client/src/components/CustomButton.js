import classNames from 'classnames';

const CustomButton = ({ children, primary, secondary, navy, ...rest }) => {
	const btnClass = classNames(
		rest.className,
		'font-medium rounded-md border-2 py-2 px-3 w-full',
		{
			'border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white':
				primary,
			'border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white':
				secondary,
			'border-[#005377] text-[#005377] hover:bg-[#005377] hover:text-white':
				navy,
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
