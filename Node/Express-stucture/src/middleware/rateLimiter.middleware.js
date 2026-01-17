import express from "express";
import rateLimit from "express-rate-limit";

const limited = rateLimit({
    windowMs: 1*60*1000,
    max:15,
    message:{
        status: 429,
        error:"Too many requests, please try again later"
    }
});

export default limited;