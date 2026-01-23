import fs from "fs"
import { ServerComponentOne } from "../components/server-component-one";

export default function InterleavingPage(){
    return(
        <>
            <h1>Interleaving page.</h1>
            <ServerComponentOne/>
        </>
    );
}