import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: null,
    profilePics: [
      {
        id:1,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJGYE1qdMKgCAZXJTAAUD5pqWqHeDbjhfhA&s"
      },
      {
        id:2,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcs2_keBhvpio2qe7rrBVnnWkkV1gK9MRmTA&s"
      },
      {
        id:3,
        url:"https://mrwallpaper.com/images/hd/cool-anime-boy-pfp-hotaro-oreki-ejrnayvw61coeizn.jpg"
      },
      {
        id:4,
        url:"https://image.winudf.com/v2/image1/Y29tLnJ1c2xpZGV2LmFuaW1lYm95cGZwX3dhbGxwYXBlcl9zY3JlZW5fNF8xNzA2NTg0MDgzXzA1MQ/screen-4.jpg?fakeurl=1&type=.jpg"
      },
      {
        id:5,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNGtfu4IJNUyGFICMNyV86e40JImtb7KnxGg&s"
      },
      {
        id:6,
        url:"https://images.unsplash.com/photo-1674425587688-bbbeb6e0a7d6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        id:7,
        url:"https://pfpmaker.com/content/img/profile-pictures/dogs/gallery/3.png"
      },
      {
        id:8,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1YdCLTYeUKKyFI6CTCis3DtcFVWLmKU6vA&s"
      },

    ],
    isUserProfileOpen:false,
  },
  reducers: {
    addUser(state, action) {
      state.userInfo = action.payload;
    },
    removeUser(state) {
      state.userInfo = null;
    },
    addProfilePic(state, action) {
      state.profilePics = action.payload;
    },
    setUserProfile(state){
      state.isUserProfileOpen = true;
    },
    disableUserProfile(state){
      state.isUserProfileOpen = false
    }
  },
});

export const { addUser, removeUser, addProfilePic ,setUserProfile , disableUserProfile} = userSlice.actions;

export default userSlice.reducer;
