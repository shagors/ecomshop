import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Anabia",
    email: "anabia@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Silvi",
    email: "silvi@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Test",
    email: "test@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
