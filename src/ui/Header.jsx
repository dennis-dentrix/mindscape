import { Avatar } from "@mui/material";
import { Calendar3, ChatDots, House, Lightbulb } from "react-bootstrap-icons";

import { NavLink, useNavigate } from "react-router-dom";
import DropMenu from "./DropMenu";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="flex bg-grey px-6 py-3 items-center justify-between border-b border-orange ">
      <div>
        <h1
          onClick={() => navigate("/dashboard")}
          className="text-orange text-base sm:text-xl md:text-2xl cursor-pointer mr-2"
        >
          Mindscape
        </h1>
      </div>

      <nav className="flex items-center gap-4">
        <NavLink
          to="/dashboard"
          className="text-sm md:text-base flex items-center gap-2"
        >
          <span className=" text-black">
            <House />
          </span>
          <p className="hidden sm:block">Home</p>
        </NavLink>

        {/* <NavLink
          to="/chats"
          className="text-sm md:text-base flex items-center gap-2"
        >
          <span className=" text-black">
            <ChatDots />
          </span>
          <p className="hidden sm:block">Chats</p>
        </NavLink> */}
        <NavLink
          to="/appointments"
          className="text-sm md:text-base flex items-center gap-2"
        >
          <span className=" text-black">
            <Calendar3 />
          </span>
          <p className="hidden sm:block">Appointments</p>
        </NavLink>
        <NavLink
          to="/resources"
          className="text-sm md:text-base flex items-center gap-2"
        >
          <span className=" text-black">
            <Lightbulb />
          </span>
          <p className="hidden sm:block">Resources</p>
        </NavLink>

        <NavLink
          to="/about"
          className="text-sm md:text-base flex items-center gap-2"
        >
          <span className=" text-black">
            <Lightbulb />
          </span>
          <p className="hidden sm:block">About</p>
        </NavLink>

        {/* <NavLink
          to="patients"
          className="text-sm md:text-base flex items-center gap-2"
        >
          <span className=" text-black">
            <Mask />
          </span>
          <p className="hidden sm:block">Patient</p>
        </NavLink> */}

        {/* <NavLink
          to="notifications"
          className="text-sm md:text-base flex items-center gap-2"
        >
          <span className=" text-black">
            <Bell />
          </span>
          <p className="hidden sm:block">Notifications</p>
        </NavLink> */}
      </nav>

      <div className="flex items-center gap-2">
        <h2>Felista</h2>
        <Avatar style={{ width: 25, height: 25 }} />
        {/* <p className="text-sm">Denis</p> */}

        <DropMenu />
      </div>
    </header>
  );
}

export default Header;
