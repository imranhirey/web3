import { useState } from "react";
import { changeName } from "../utils/wallet";

export default function Hastoken({user}) {
  

  return (
    <div className="flex">
       {user && <h1>user has token </h1>}
       {console.log(user)}
    </div>
  );
}
