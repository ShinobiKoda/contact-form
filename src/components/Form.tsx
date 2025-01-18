const Form = () => {
  return (
    <div className="w-full flex items-center justify-center px-3 py-[8rem] lg:h-screen">
      <form className="bg-white w-full rounded-md max-w-[700px] mx-auto px-6 py-4 flex flex-col gap-8">
        <h1 className="text-2xl font-extrabold">Contact Us</h1>

        <div className="flex flex-col gap-8 md:flex-row lg:justify-between">
          <div className="relative md:flex-1">
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-md px-3 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label
              htmlFor="first-name"
              className="absolute left-3 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 z-10"
            >
              First Name
            </label>
          </div>

          <div className="relative md:flex-1">
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder=" "
              className="peer w-full border border-gray-300 rounded-md px-3 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label
              htmlFor="last-name"
              className="absolute left-3 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 z-10"
            >
              Last Name
            </label>
          </div>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            className="peer w-full border border-gray-300 rounded-md px-3 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label
            htmlFor="email"
            className="absolute left-3 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 z-10"
          >
            Email
          </label>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="query" className="font-bold text-xl">Query Type</label>
          <div className="flex flex-col gap-4 md:flex-row justify-between">
            <div className="flex items-center gap-3 border-2 p-2 rounded-md flex-1">
              <input type="radio" name="query" id="query" />
              <label htmlFor="query">General Query</label>
            </div>
            <div className="flex items-center gap-3 border-2 p-2 rounded-md flex-1">
              <input type="radio" name="query" id="request" />
              <label htmlFor="request">Support Request</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-bold text-xl">Message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            className="border border-gray-300"
          ></textarea>
        </div>

        <div className="flex gap-2 items-center">
          <input type="checkbox" name="agree" id="agree" />
          <span>I agree to being contacted by the team</span>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0c7d69] p-2 rounded-md hover:opacity-90 cursor-pointer text-white font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
