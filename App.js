// import express from 'express';
// import Hello from './Hello.js';
// import Lab5 from './Lab5.js';
// import cors from "cors";
// import CourseRoutes from './Kanbas/courses/routes.js';
// import ModuleRoutes from "./Kanbas/modules/routes.js";
// import AssignmentRoutes from './Kanbas/assignments/routes.js';
// import UserRoutes from "./Kanbas/users/routes.js";
// import mongoose from "mongoose";
// import session from "express-session";
// import "dotenv/config";

// const app = express();

// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.FRONTEND_URL
//   })
//  );
 
// app.use(express.json());

// const sessionOptions = {
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
// };

// if (process.env.NODE_ENV !== "development") {
//   sessionOptions.proxy = true;
//   sessionOptions.cookie = {
//     sameSite: "none",
//     secure: true,
//     domain: process.env.HTTP_SERVER_DOMAIN,
//   };
// }

// console.log(sessionOptions);


// app.use(
//   session(sessionOptions)
// );
  

// Hello(app);
// Lab5(app);
// CourseRoutes(app);
// ModuleRoutes(app);
// AssignmentRoutes(app);
// UserRoutes(app);

// app.listen(process.env.PORT || 4000);

import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from './Kanbas/courses/routes.js';
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import UserRoutes from "./Kanbas/users/routes.js";
import mongoose from "mongoose";
import session from "express-session";
import "dotenv/config";

const app = express();
app.use(cors({
  origin: 'http://localhost:3000' 
}));

app.use(express.json());

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.HTTP_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);

Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);