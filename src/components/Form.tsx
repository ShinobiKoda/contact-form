import { useState } from "react";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  agree: boolean;
};

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  queryType?: string;
  message?: string;
  agree?: string;
};

const Form = () => {
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate first name
    if (!values.firstName.trim()) {
      newErrors.firstName = "Enter your first name.";
    }

    // Validate last name
    if (!values.lastName.trim()) {
      newErrors.lastName = "Enter your last name.";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(values.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate query type
    if (!values.queryType) {
      newErrors.queryType = "Please select a query type.";
    }

    // Validate message (optional)
    if (!values.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    // Validate agreement
    if (!values.agree) {
      newErrors.agree = "You must agree to be contacted.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target;

    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value, // For radio buttons, update the `value`
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", values);
    } else {
      console.log("Form validation failed.");
    }
  };

  return (
    <div className="w-full flex items-center justify-center px-3 py-[8rem] lg:h-screen">
      <form
        className="bg-white w-full rounded-md max-w-[700px] mx-auto px-6 py-4 flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-extrabold">Contact Us</h1>

        <div className="flex flex-col gap-8 md:flex-row lg:justify-between">
          <div className="relative md:flex-1">
            <input
              type="text"
              name="firstName"
              placeholder=" "
              value={values.firstName}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-md px-3 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label className="absolute left-3 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 z-10">
              First Name
            </label>
            {errors.firstName && (
              <p style={{ color: "red" }}>{errors.firstName}</p>
            )}
          </div>

          <div className="relative md:flex-1">
            <input
              type="text"
              name="lastName"
              placeholder=" "
              value={values.lastName}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-md px-3 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <label className="absolute left-3 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 z-10">
              Last Name
            </label>
            {errors.lastName && (
              <p style={{ color: "red" }}>{errors.lastName}</p>
            )}
          </div>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder=" "
            value={values.email}
            onChange={handleChange}
            className="peer w-full border border-gray-300 rounded-md px-3 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <label className="absolute left-3 -top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1 z-10">
            Email
          </label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="query" className="font-bold text-xl">
            Query Type
          </label>
          <div className="flex flex-col gap-4 md:flex-row justify-between">
            <div className="flex items-center gap-3 border-2 p-2 rounded-md flex-1">
              <input
                type="radio"
                name="queryType"
                id="generalQuery"
                value="General Query"
                checked={values.queryType === "General Query"}
                onChange={handleChange}
              />
              <label htmlFor="generalQuery">General Query</label>
            </div>
            <div className="flex items-center gap-3 border-2 p-2 rounded-md flex-1">
              <input
                type="radio"
                name="queryType"
                id="supportRequest"
                value="Support Request"
                checked={values.queryType === "Support Request"}
                onChange={handleChange}
              />
              <label htmlFor="supportRequest">Support Request</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-bold text-xl">Message</label>
          <textarea
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            className="border border-gray-300 p-3"
          ></textarea>
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={values.agree || false}
              onChange={handleChange}
            />
            <span>I agree to being contacted by the team</span>
          </div>
          {errors.agree && <p className="block text-red-500">{errors.agree}</p>}
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
