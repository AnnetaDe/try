import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { signUp } from '../auth/auth-request';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-sm">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="text-white-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Your name
          </label>
          <input
            {...register('name')}
            type="name"
            id="name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="enter your name"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-white-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Your email
          </label>
          <input
            {...register('email')}
            type="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="text-white-900 mb-2 block text-sm font-medium dark:text-white"
          >
            Your password
          </label>

          <input
            {...register('password', { required: true })}
            type="password"
            id="password"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-5">
          <button
            type="submit"
            className='class="text-white dark:focus:ring-blue-800" w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700'
          >
            Submit
          </button>
        </div>

        <Link className="text-white-900 mb-2 block text-sm font-medium dark:text-white" to="/login">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
