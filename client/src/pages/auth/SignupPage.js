import { useState } from 'react';
import FormInput from '../../components/FormInput';
import CustomButton from '../../components/CustomButton';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const SignupPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signup } = useAuthContext();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !email || !password) {
			return alert('Both fields are required!!');
		}

		signup({ name, email, password });
	};
	return (
		<>
			<div className='w-[80%]'>
				<div className='absolute left-1/2 translate-y-[15%] -translate-x-1/2 mx-auto w-[80%] max-w-[400px] md:-translate-x-1/3 bg-slate-200 shadow-lg pt-7 pb-14 px-5 rounded-lg'>
					<span className='flex justify-center text-5xl text-gray-600 pb-3'>
						<FaUserCircle />
					</span>
					<h2 className='text-2xl font-bold text-gray-700 text-center pb-8'>
						SignUp
					</h2>
					<form className='mx-auto space-y-5' onSubmit={handleSubmit}>
						<div>
							<FormInput
								id='name'
								type='text'
								title='Nick Name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div>
							<FormInput
								id='email'
								type='email'
								title='E-mail'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div>
							<FormInput
								id='password'
								type='password'
								title='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<CustomButton secondary type='submit'>
							SignUp
						</CustomButton>
						<p className='text-center'>
							You already have an account?{' '}
							<Link
								to='/login'
								className=' text-blue-800 border-blue-800 border-b-2'
							>
								Login
							</Link>
						</p>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignupPage;
