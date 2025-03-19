"use client";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import CustomPhoneInput from "./PhoneInput";

const FloatingLabelInput = ({
  field,
  form,
  label,
  type = "text",
  ...props
}: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = field.value !== "";
  const inputId = `floating_${field.name}`;

  return (
    <div className="relative">
      <input
        {...field}
        {...props}
        id = {inputId}
        type={type}
        className="w-full px-3 py-3 border-1 border-gray bg-white rounded-[0.208vw] peer placeholder-transparent focus:outline-none focus:border-primary"
        placeholder={label}
        required
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          field.onBlur(e);
          setIsFocused(false);
        }}
      />
      <label
        htmlFor={inputId}
        className={`absolute left-3 transition-all duration-200 
          ${
            isFocused || hasValue
              ? "-top-2.5 text-[0.625vw] bg-white px-1 text-gray "
              : "top-3 text-gray"
          } peer-focus:-top-2.5 peer-focus:text-[0.625vw] peer-focus:bg-white peer-focus:px-1 peer-focus:rounded-[0.208vw] peer-focus:text-primary`}
      >
        {label}
      </label>
    </div>
  );
};

const SignupForm = () => {

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
    first_name: Yup.string().required("Required").min(3, "Must be at least 3 characters").max(20, "Must be less than 20 characters"),
    last_name: Yup.string().required("Required").min(3, "Must be at least 3 characters").max(20, "Must be less than 20 characters"),
    phone_number: Yup.string().matches(/^[0-9]{3}-[0-9]{2}-[0-9]{3}$/, "Invalid phone number").required("Required"),
  });

  const handleSubmit = async (values: any) => {
    console.log(values);
  };

  const handleGoogleLogin = async () => {
    console.log("Google login");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", first_name: "", last_name: "" , phone_number: ""}}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form className="w-[20vw] ">
          <div className="flex flex-col gap-[2.083vw] w-full ">
            <div className="flex flex-col gap-[0.521vw] w-full">
              <h1 className="text-primary font-medium text-[1.667vw]">Signup</h1>
              <p className="text-soft-black text-[1.042vw]">Create your account</p>
            </div>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full p-[0.625vw] bg-white rounded-[0.208vw] cursor-pointer flex items-center justify-center gap-2 border-gray border-1 text-primary font-bold text-[0.833vw]"
            >
              <FcGoogle size={20} />
              Sign up with Google
            </button> 

            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-2">
              <div className="relative">
                <Field
                  name="first_name"
                  component={FloatingLabelInput}
                  label="First Name"
                  type="text"
                />
                {values.first_name && !errors.first_name && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                    <FaCheck size={18} />
                  </div>
                )}
              </div>
              <div className="relative">
                <Field
                  name="last_name"
                  component={FloatingLabelInput}
                  label="Last Name"
                  type="text"
                />
                {values.last_name && !errors.last_name && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                    <FaCheck size={18} />
                  </div>
                )}
              </div>
              </div>
              <div className="relative">
                <Field
                  name="email"
                  component={FloatingLabelInput}
                  label="Email"
                  type="email"
                />
                {values.email && !errors.email && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary">
                    <FaCheck size={18} />
                  </div>
                )}
              </div>

              <div className="relative">
                <CustomPhoneInput
                  value={values.phone_number}
                  onChange={(phone) => setFieldValue("phone_number", phone)}
                  placeholder="Phone Number"
                />
              </div>
            </div>

              <button
                type="submit"
                className="bg-primary text-white p-[0.625vw] text-[0.833vw] rounded-[0.208vw] cursor-pointer font-bold flex items-center justify-center gap-2"
              >
                Create Password
                <FaArrowRightLong />
              </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
