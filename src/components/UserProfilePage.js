import { useDispatch, useSelector } from "react-redux";
import { disableUserProfile } from "../utils/userSlice";

const UserProfilePage = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((store) => store.user.userInfo);
  const isUserProfileOpen = useSelector(
    (store) => store.user.isUserProfileOpen
  );
  return (
    <div
      className={`fixed right-0 top-0 bg-slate-900 z-40 text-white min-h-screen w-[35%]  flex flex-col gap-10 transition-transform ease-in-out duration-500 ${
        isUserProfileOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col gap-4 items-center p-4  ">
        <button
          onClick={() => dispatch(disableUserProfile())}
          className="self-end text-3xl"
        >
          X
        </button>
        <img
          className="w-28 h-28 rounded-full"
          src={userProfile?.photoURL}
          alt="user-profile-pic"
        ></img>
        <h1 className="font-bold text-xl">{userProfile?.displayName}</h1>
      </div>
      <div>
        <ul className="flex flex-col  items-center">
          <li className="self-stretch text-center p-4 hover:bg-slate-800 duration-500 cursor-pointer">
            Watchlist
          </li>
          <li className="self-stretch text-center p-4  hover:bg-slate-800 duration-500 cursor-pointer">
            Recommendation
          </li>
          <li className="self-stretch text-center p-4  hover:bg-slate-800 duration-500 cursor-pointer">
            Account Settings
          </li>
          <li className="self-stretch text-center p-4  hover:bg-slate-800 duration-500 cursor-pointer">
            Feedback
          </li>
          <li className="self-stretch text-center p-4  hover:bg-slate-800 duration-500 cursor-pointer">
            Support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfilePage;
