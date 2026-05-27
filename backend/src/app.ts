import express from "express";
import { clerkMiddleware } from "@clerk/express";
import authRoutes from "./routes/authRoutes"
import chatRoutes from "./routes/chatRoute"
import messageRoutes from "./routes/authRoutes"
import userRoutes from "./routes/userRoutes"
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use(clerkMiddleware);

app.get("/health", (req,res) => {
    res.json({status:"ok", message: "Server is running"})
})

app.use("/api/auth",authRoutes)
app.use("/api/chats",chatRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/user",userRoutes)

app.use(errorHandler);

export default app;