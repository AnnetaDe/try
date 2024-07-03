export const CheckBox = props => {
  return (
    <div className="mb-5 flex items-start">
      <div className="flex h-5 items-center">
        <input
          id="remember"
          type="checkbox"
          value=""
          className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
          required
        />
      </div>
      <label
        htmlFor="remember"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Remember me
      </label>
    </div>
  );
};
