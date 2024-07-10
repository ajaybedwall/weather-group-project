import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import googleIcon from "../assets/images/google-icon.png"; // Ensure the correct path to your google icon

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/profile";
      }
    });
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-gray-600 mb-4">--Or continue with--</p>
      <div
        className="flex justify-center items-center bg-white shadow-md rounded-full p-2 cursor-pointer hover:bg-gray-100"
        onClick={googleLogin}
      >
        <img src={googleIcon} alt="Google Icon" className="w-8 h-8" />
      </div>
    </div>
  );
}

export default SignInwithGoogle;
