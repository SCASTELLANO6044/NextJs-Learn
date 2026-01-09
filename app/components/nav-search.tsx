"use client";


import { useState } from "react";

export const NavSearch = () => {

    const [search, setSearch] = useState("");

    console.log(`NavSearch render`)
    return <div>Nav search input</div>;
}