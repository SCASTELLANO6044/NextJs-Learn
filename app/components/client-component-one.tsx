"use client";

import { useState } from "react"
import { ServerComponentOne } from "./server-component-one";

export const ClientComponentOne = () => {
    const [name, setName] = useState("Batman");

    return (
        <>
            <h1>Client component one.</h1>
            <ServerComponentOne/>
        </>
    );
}