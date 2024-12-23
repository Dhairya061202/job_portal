import React from "react";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import "../responsive/Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);

  // const user = false;
  return (
    <div className="bg-white">
      <div className="res-design flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl res-title font-bold">
            Job <span className="text-[#F83002] res-title">Portal</span>
          </h1>
        </div>
        <div className="res-gap flex item-center gap-12">
          <ul className="flex font-medium cursor-pointer items-center gap-5 res-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>{" "}
            </li>
          </ul>

          {!user ? (
            <div className="flex item-center gap-3">
              <Link to="/login">
                <Button className="res-button" variant="outline">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="res-button">SignUp</Button>
              </Link>
            </div>
          ) : (
            <Popover className="ml-1">
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div className="flex gap-4 items-center">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Hello, {user.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col my-2 text-gray-600">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link">
                      <Link to="/profile">Profile</Link>
                    </Button>
                  </div>

                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
