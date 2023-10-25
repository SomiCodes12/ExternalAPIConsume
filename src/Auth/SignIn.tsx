import { useState } from "react";
import { signInAPI } from "../api/APIs";
import Swal from "sweetalert2";
import { useUserToken } from "../global/jotai";
// import { useMainUser } from "../global/jotai";

const SignIn = () => {

  const [ user , setUser ] = useUserToken();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const [user, setUser] = useMainUser();

  return (
    <div>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className=" border p-3 items-center-center flex flex-col px-6">
          {/* <div className="flex w-full justify-center">
            <div className="flex items-center">
              <div className="w-[35px] h-[35px] rounded-[50%] justify-center items-center flex border-purple-400 border bg-purple-500">
                1
              </div>
              <div className="w-[120px] h-0.5 bg-purple-500 mx-2 flex-row flex border border-purple-300"></div>
            </div>
            <div className="flex items-center">
              <div className="w-[35px] h-[35px] rounded-[50%] justify-center items-center flex border-purple-400 border">
                2
              </div>
              <div className="w-[120px] h-0.5 bg-purple-500 mx-2 flex-row flex border border-purple-300"></div>
              <div className="w-[35px] h-[35px] rounded-[50%] justify-center items-center flex border-purple-400 border">
                3
              </div>
            </div>
          </div> */}
          <input
            type="text"
            className="w-[450px] h-[60px] border pl-3 outline-none my-2"
            placeholder="Enter Email Here"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            className="w-[450px] h-[60px] border pl-3 outline-none my-2"
            placeholder="Enter Password Here"
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
          <div className="w-full flex justify-end">
            <button className="py-3 px-8 my-4 text-white hover:cursor-pointer bg-purple-600" onClick={() => {

              setUser({
                email,
                password
              })

              signInAPI({email , password}).then(() => {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Welcome",
                  showConfirmButton: false,
                  timer: 1500,
                })              })
            }}>
              SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
