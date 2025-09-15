import Link from "next/link";
import React from "react";

const VerifyYourEmail = () => {
  return (
    <div>
      {" "}
      <div className="mb-6 flex-col flex items-center justify-center">
        <h1 className="text-4xl font-semibold text-foreground mb-4">
          Verify Your Email
        </h1>
        <p className="text-md font-light text-gray-500 text-muted-foreground">
          Weve sent 6 digit code to your email
        </p>
        <div className="mt-20 flex flex-col gap-4 items-center justify-center">
          <div className="flex items-center justify-center gap-3">
            <input
              type="text"
              className="border border-gray-200 w-[3rem] rounded h-[3rem]"
            />
            <input
              type="text"
              className="border border-gray-200 w-[3rem] rounded h-[3rem]"
            />
            <input
              type="text"
              className="border border-gray-200 w-[3rem] rounded h-[3rem]"
            />
            <input
              type="text"
              className="border border-gray-200 w-[3rem] rounded h-[3rem]"
            />
            <input
              type="text"
              className="border border-gray-200 w-[3rem] rounded h-[3rem]"
            />
            <input
              type="text"
              className="border border-gray-200 w-[3rem] rounded h-[3rem]"
            />
          </div>
          <span>
            Dont received the code?{" "}
            <Link className="text-blue-500" href={""}>
              Resend
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyYourEmail;
