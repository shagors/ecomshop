import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

// @desc Auth user & get token
// @route POST api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    //   set jwt HTTP-only cookies
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
    });

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invaild Email or password");
  }
});

// @desc Auth user & get token
// @route POST api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register  user");
});

// @desc Logout user & clear cookies
// @route POST api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout  user");
});

// @desc Get user Profile
// @route GET api/users/profile
// @access Public
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user Profile");
});

// @desc Update user Profile
// @route PUT api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user Profile");
});

// @desc Get users
// @route GET api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("Get users");
});

// @desc Get user By ID
// @route GET api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("Get user By ID");
});

// @desc Delete user
// @route DELETE api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete user Profile");
});

// @desc Update user By ID
// @route PATCH api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
