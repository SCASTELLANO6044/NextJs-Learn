"use client";

import { serverSideFunction } from "../utils/server-utils";

export default function CñientRoutePage(){
    const result = serverSideFunction();
    return(
        <h1>Client Route {result}</h1>
    );
}