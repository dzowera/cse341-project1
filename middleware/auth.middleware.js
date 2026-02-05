import { json } from "express";
import jwt from "jsonwebtoken";

export const protect = (req, res, next) =>{
  try {
    let token;
    // check the auth header
    if(
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ){
      token = req.headers.authorization.split(" ")[1];
    }
    // if no token
    if(!token){
      return res.status(401).json({message: "Not authorized, no token"})
    }
    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
    // attach the decoded to object req.user
    req.user = decoded
    next()

  } catch (error) {
    res.status(401).json({message: "Not Authorized. Token failed"});
    
  }
}
