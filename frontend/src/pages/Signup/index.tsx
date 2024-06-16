import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { defaultValue, SignupSchema, SignupType } from "./schema";

/**
 * @returns Signup component
 */
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupType>({
    resolver: zodResolver(SignupSchema),
    defaultValues: defaultValue,
  });

  const onSubmit = (data: SignupType) => {
    console.log(data);
  };

  return (
    <section className="bg-gray-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          時間割アプリ
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="example@example.com"
                  required
                />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  {...register("password")}
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
                {errors.password && (
                  <span className="text-sm text-red-600">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500">
                Already have an account?{" "}
                <a
                  href="/"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
          <div className="flex items-center justify-between mt-4">
            <hr className="w-full border-t border-gray-300" />
            <span className="px-2 text-gray-400">or</span>
            <hr className="w-full border-t border-gray-300" />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 m-6 px-6">
            <button
              type="button"
              className="flex items-center justify-center w-full text-gray-900 bg-white border border-gray-300 rounded-lg py-2.5 px-4 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_Logo_2015.png"
                alt="Google Logo"
                className="w-5 h-5 mr-2"
              />
              Sign up with Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full text-gray-900 bg-white border border-gray-300 rounded-lg py-2.5 px-4 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple Logo"
                className="w-5 h-5 mr-2"
              />
              Sign up with Apple
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
