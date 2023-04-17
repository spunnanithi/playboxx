import { NavLink, Link } from "react-router-dom";
import { useLogoutMutation } from "../store/authApi";
import { selectCurrentToken, selectCurrentUser } from "../store/userSlice";
import { useSelector } from "react-redux";
import { Navbar, Dropdown, Collapse, Avatar } from "flowbite-react";
import logo from "../images/logo.gif";
import "./Component.css";
import { UserIcon } from "../images/userIcon";

export default function NavBar() {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);
  const [logout] = useLogoutMutation();

  return (
    <Navbar
      fluid={true}
      className="bg-primary fixed-top"
      style={{ backgroundColor: "#FF9494" }}
    >
      <Navbar.Brand href="/">
        <img
          style={{ height: 100, width: 100 }}
          src={logo}
          className="mr-1 h-6 sm:h-9"
          alt="Playboxx Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          PlayBoxx
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            user.profile_picture ? (
              <Avatar
                alt="User settings"
                src={user.profile_picture}
                rounded={true}
              />
            ) : (
              <Avatar alt="User settings" src={<UserIcon />} rounded={true} />
            )
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user.username}</span>
            <span className="block truncate text-sm font-medium">
              {user.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/games">Games</Navbar.Link>
        <Navbar.Link href="/leaderboard">Leaderboard</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

{
  /* <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div>
        <NavLink to="/">PlayBoxx</NavLink>
        <div>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <ul>
            <li></li>
          </ul>
        </div>
        <div>
          <NavLink to="/games">Games</NavLink>
          <ul>
            <li></li>
          </ul>
        </div>
        {token ? (
          <button onClick={() => logout()}>Logout</button>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  ); */
}