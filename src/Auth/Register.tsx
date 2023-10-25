import { AiOutlineCamera } from "react-icons/ai";
import pix from "../assets/react.svg";
import { useCount, useMainUser } from "../global/jotai";
import { useState } from "react";
import Card from "../Pages/Card";
import { registerAPI } from "../api/APIs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

const Step = () => {
  const [state, setState] = useCount();
  const [user, setUser]: any = useMainUser();

  const [userName, setUserName] = useState<string>(user.userName);
  const [email, setEmail] = useState<string>(user.email);
  const [password, setPassword] = useState<string>(user.password);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className=" border p-3 items-center-center flex flex-col px-6">
        <div className="flex w-full justify-center">
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
            <div className="w-[35px] h-[35px] rounded-[50%] justify-center items-center flex border-purple-400 border hover:cursor-pointer" onClick={() => {
              setState(3)
            }}>
              3
            </div>
          </div>
        </div>
        <input
          type="text"
          className="w-full h-[60px] border pl-3 outline-none my-2"
          placeholder="Enter userName Here"
          value={userName}
          onChange={(e: any) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          className="w-full h-[60px] border pl-3 outline-none my-2"
          placeholder="Enter Email Here"
          value={email}
          onChange={(e: any) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          className="w-full h-[60px] border pl-3 outline-none my-2"
          placeholder="Enter Password Here"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        <div className="w-full flex justify-end">
          <button
            className="py-3 px-8 my-4 text-white hover:cursor-pointer bg-purple-600"
            onClick={() => {
              setState(2);

              setUser({
                userName,
                email,
                password,
                bio: user.bio,
              });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const StepII = () => {
  const [state, setState] = useCount();
  const [user, setUser]: any = useMainUser();

  const [bio, setBio] = useState<string>(user.bio);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className=" border p-3 item-center flex flex-col px-6">
        <div className="flex w-full justify-center">
          <div className="flex items-center">
            <div className="w-[35px] h-[35px] rounded-[50%] justify-center items-center flex border-purple-400 border bg-purple-500">
              1
            </div>
            <div className="w-[120px] h-0.5 bg-purple-500 mx-2 flex-row flex border border-purple-500"></div>
          </div>
          <div className="flex items-center">
            <div className="w-[35px] h-[35px] rounded-[50%] justify-center items-center flex border-purple-400 border bg-purple-500 ">
              2
            </div>
            <div className="w-[120px] h-0.5 bg-purple-500 mx-2 flex-row flex border border-purple-200"></div>
            <div className="w-[35px] h-[35px] rounded-[50%] justify-center items-center flex border-purple-400 border">
              3
            </div>
          </div>
        </div>
        <div className="my-2">
          {" "}
          <textarea
            className="w-full h-[200px] border rounded-md  p-2 outline-none"
            placeholder="Enter Bio here"
            value={bio}
            onChange={(e: any) => {
              setBio(e.target.value);
            }}
          ></textarea>{" "}
        </div>
        <div className="w-full flex justify-end">
          <div
            className="py-3 px-8 my-4 text-white hover:cursor-pointer bg-black mr-3"
            onClick={() => {
              setState(1);
            }}
          >
            Prev
          </div>
          <button
            className="py-3 px-8 my-4 text-white hover:cursor-pointer bg-purple-600"
            onClick={() => {
              setState(3);

              setUser({
                userName: user.userName,
                email: user.email,
                password: user.password,
                bio,
                avatar : user.avatar
              });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const StepIII = () => {
  const navigate = useNavigate();

  const [state, setState] = useCount();
  const [user, setUser]: any = useMainUser();

  const [image, setImage] = useState<string>("");
  const [imageData, setImageData] = useState<string>("");

  const onHandleImage = (e: any) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setImageData(file);
  };
  const formData = new FormData();

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className=" border p-3 item-center flex flex-col px-6">
        <div className="flex w-full justify-center">
          <div className="flex items-center">
            <div className="w-[35px] h-[35px] rounded-[50%] justify-center items-center flex border-purple-400 border bg-purple-500 hover:cursor-pointer" onClick={() => {
              setState(1)
            }}>
              1
            </div>
            <div className="w-[120px] h-0.5 bg-purple-500 mx-2 flex-row flex border border-purple-500"></div>
          </div>
          <div className="flex items-center">
            <div className="w-[35px] h-[35px] rounded-[50%] justify-center items-center flex border-purple-400 border bg-purple-500 ">
              2
            </div>
            <div className="w-[120px] h-0.5 bg-purple-500 mx-2 flex-row flex border border-purple-500"></div>
            <div className="w-[35px] h-[35px] rounded-[50%] justify-center items-center flex border-purple-400 border bg-purple-500">
              3
            </div>
          </div>
        </div>
        <div className="my-2 flex justify-center">
          <div className="w-[300px] h-[200px] rounded-md object-cover border relative">
            <img
              src={image === "" ? pix : image}
              className="w-[300px] h-[200px] rounded-md object-cover"
            />
            <label htmlFor="pix">
              <AiOutlineCamera className="p-2 bg-white rounded-[50%] text-[50px] absolute right-2 bottom-2" />
            </label>
          </div>
          <input
            type="file"
            id="pix"
            className="hidden"
            onChange={onHandleImage}
          />
        </div>
        <div className="w-full flex justify-end">
          <div
            className="py-3 px-8 my-4 text-white hover:cursor-pointer bg-black mr-3"
            onClick={() => {
              setState(2);
            }}
          >
            Prev
          </div>
          <button
            className="py-3 px-8 my-4 text-white hover:cursor-pointer bg-purple-600"
            onClick={() => {
              setUser({
                userName: user.userName,
                email: user.email,
                password: user.password,
                bio: user.bio,
                avatar: image,
              });

              formData.append("userName", user.userName);
              formData.append("email", user.email);
              formData.append("password", user.password);
              formData.append("bio", user.bio);
              formData.append("avatar", imageData);

              registerAPI(formData).then(() => {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Registered Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                })
              }).then(() => {
                navigate("/sign-in");
              });

              setState(1);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
const Register = () => {
  const [state, setState] = useCount();

  return (
    <div className="w-full h-[100vh] flex justify-center items-center phone:w-[100%]">
      {state === 1 ? (
        <Step />
      ) : state === 2 ? (
        <StepII />
      ) : state === 3 ? (
        <StepIII />
      ) : null}
      <div className="mr-[50px]">
        <Card />
      </div>
    </div>
  );
};

export default Register;
