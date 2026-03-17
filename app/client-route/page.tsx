"use client";


import { serverSideFunction } from "../utils/server-utils";
import { clientSideFunctions } from "../utils/client-utils";

export default function CñientRoutePage() {
    const result = serverSideFunction();
    const client = clientSideFunctions();
    return (
        <>
            <h1>Client Route {result}</h1>
            <p>{client}</p>
        </>
    );
}