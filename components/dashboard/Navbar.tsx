import React from "react";
import { getProfile } from "../../lib/authentication";

interface IProps {
  options: Array<string>;
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

export default function Navbar(props: IProps) {
  const [openDropdown, setOpenDropdown] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [openNotif, setOpenNotif] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

  React.useEffect(() => {
    getProfile().then((profile) => setUserData(profile));
  }, []);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <a href="/">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="img/bg.webp"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="img/bg.webp"
                  alt="Workflow"
                />
              </div>
            </a>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {props.options.map((v) => (
                  <a
                    key={v}
                    href="#"
                    onClick={() => props.setSelectedOption(v)}
                    className={
                      "px-3 py-2 rounded-md text-sm font-medium " +
                      (props.selectedOption == v
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white")
                    }
                  >
                    {v}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative inline-block text-left">
              <button
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white   text-left"
                onClick={() => setOpenNotif(!openNotif)}
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <NotificationDropdown
                open={openNotif}
                setOpen={(v) => setOpenNotif(v)}
              />
            </div>
            <div className="ml-3 relative">
              <div>
                <button
                  className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-haspopup="true"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={
                      "https://ui-avatars.com/api/?name=" + userData?.username
                    }
                  />
                </button>
              </div>
              <ProfileDropDown
                open={openDropdown}
                setOpen={(v) => setOpenDropdown(v)}
              />
            </div>
          </div>
        </div>
      </div>
      {openMenu ? (
        <div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {props.options.map((v) => (
              <a
                key={v}
                href="#"
                onClick={() => props.setSelectedOption(v)}
                className={
                  "block px-3 py-2 rounded-md text-base font-medium " +
                  (props.selectedOption == v
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white")
                }
              >
                {v}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}

interface NotificationDropdownProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

function NotificationDropdown(props: NotificationDropdownProps) {
  const dropDownRef = React.useRef(null);
  const [notifications, setNotifications] = React.useState([]);

  React.useEffect(() => {
    if (props.open) {
      document.addEventListener("mousedown", handleClick, false);
      loadNotifications();
    } else document.removeEventListener("mousedown", handleClick, false);
  }, [props.open]);

  const handleClick = (e) => {
    if (!dropDownRef.current) return;
    if (!dropDownRef.current.contains(e.target)) {
      props.setOpen(false);
    }
  };

  const loadNotifications = () => {
    fetch(process.env.NEXT_PUBLIC_API_ENDPOINT + "/notifications")
      .then((res) => res.json())
      .then((response) => setNotifications(response));
  };

  if (!props.open) return <></>;
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
      ref={dropDownRef}
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {notifications.length == 0 ? (
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            You have no new notifications
          </a>
        ) : (
          notifications.map((v) => (
            <a
              href="#"
              className="block px-4 py-2 text-gray-700"
              role="menuitem"
            >
              <p className="text-md text-gray-900">{v.Title}</p>
              <p className="text-xs text-gray-500">
                {v.Description.slice(0, 50)}
                {v.Description.length > 50 ? (
                  <>
                    ...
                    <a href="" className="text-blue-500">
                      Read More
                    </a>
                  </>
                ) : null}
              </p>
            </a>
          ))
        )}
      </div>
    </div>
  );
}

interface ProfileDropDownProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

function ProfileDropDown(props: ProfileDropDownProps) {
  const dropDownRef = React.useRef(null);

  React.useEffect(() => {
    if (props.open) document.addEventListener("mousedown", handleClick, false);
    else document.removeEventListener("mousedown", handleClick, false);
  }, [props.open]);

  const handleClick = (e) => {
    if (!dropDownRef.current) return;
    if (!dropDownRef.current.contains(e.target)) {
      props.setOpen(false);
    }
  };

  const signOut = () => {
    localStorage.removeItem("jwt");
    window.location.href = "/training";
  };

  if (!props.open) return <></>;
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu"
      ref={dropDownRef}
    >
      <button
        onClick={signOut}
        className="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-gray-100"
      >
        Sign out
      </button>
    </div>
  );
}
