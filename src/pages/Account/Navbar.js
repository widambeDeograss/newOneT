import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  ArrowRightOnRectangleIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  BookOpenIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../api/auth/AuthSlice";
import './navbar.css'
import logo from '../../Assets/Vastfx.PNG'

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const token = useSelector(selectCurrentToken);
  const navigate = useNavigate()

  // profile menu component
  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
      whereto: "/account/profile",
    },
    // {
    //   label: "Edit Profile",
    //   icon: Cog6ToothIcon,
    //   whereto: "",
    // },
    // {
    //   label: "Inbox",
    //   icon: InboxArrowDownIcon,
    //   whereto: "",
    // },
    // {
    //   label: "Help",
    //   icon: LifebuoyIcon,
    //   whereto: "",
    // },
    // {
    //   label:"Sign Out",
    //   icon: token ? PowerIcon : CubeTransparentIcon,
    //   whereto: token ? "/login" : "/register",
    // },
  ];

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA29za2oYfB6YlZLiz_E8tShFpXXE1vliCbkmPfxufNh2O4CvZk1GSnb9zChJ7qVc2LGU&usqp=CAU"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, whereto, handleaction }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <a
              href={whereto}
              onClick={() => {
                if (whereto === "/login") {
                  // localStorage.clear();
                }
              }}
            >
              <MenuItem
                key={label}
                onClick={() => {
                  closeMenu();
                }}
                className="flex items-center gap-2 rounded "
              >
                {React.createElement(icon, {
                  className: "h-4 w-4",
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color= "inherit"
                >
                  {label}
                </Typography>
              </MenuItem>
            </a>
          );
        })}
        <MenuItem
                onClick={() => {
                  closeMenu();
                  localStorage.clear()
                  navigate("/")
                }}
                className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                   
              >
                {React.createElement(PowerIcon, {
                  className: "h-4 w-4 text-red-500",
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color="red"
                >
                  {" Sign Out"}
                </Typography>
              </MenuItem>
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "VastFx services",
    description:
      "Get to know all the services we provide.",
  },
  {
    title: "VastFx Team",
    description:
      "Get to know our team of experts.",
  },
  {
    title: "VastFx Events",
    description:
      "Get updated with all our recent and upcoming events.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal" >
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full text-white"
              
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
              <ChevronDownIcon
              
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <Card
            color="gray"
            shadow={false}
            variant="gradient"
            className="col-span-3 grid h-full w-full place-items-center rounded-md"
          >
            <img strokeWidth={1} className="h-28 w-28" src={logo} />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden ">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

function NavList(props) {
  const token = useSelector(selectCurrentToken);

  // nav list component
  const navListItems = token
    ? [
      {
        label: "Home",
        icon: HomeIcon,
        whereto: token ? "/account" : "/",
      },

      { label: "Books", icon: BookOpenIcon, whereto: "/account/books" },
      
    ]
    : [
        {
          label: "Home",
          icon: HomeIcon,
          whereto: token ? "/account" : "/",
        },

        // { label: "Books", icon: BookOpenIcon, whereto: "/account/books" },
      ];

  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, whereto }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color={props.color}
          className="font-normal"
        >
          <a href={whereto}>
            {" "}
            <MenuItem className="flex items-center gap-2 lg:rounded-full " color={props.color}>
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {label}
            </MenuItem>
          </a>
        </Typography>
      ))}
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const token = useSelector(selectCurrentToken);
  const [colorChange, setColorchange] = React.useState(false);

  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };

  window.addEventListener('scroll', changeNavbarColor);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar
    className= 'newnav mx-auto max-w-screen-xl p-3 lg:rounded-full lg:pl-6 w-full'
      style={{width:"100%", boxShadow:"inherit"}}

      // color={colorChange || isNavOpen? 'gray':"transparent"}
    >
      <div className="relative mx-auto flex items-center ">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer  font-medium"
          color={isNavOpen?'black':""}
        >
          <strong>
            {" "}
            <h1>
              Vast<span style={{ color: "red" }}>FX</span>
            </h1>
          </strong>
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList color={isNavOpen?'black':""}/>
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        {token? <ProfileMenu /> :   <a
              href='/login'
              className="flex items-center gap-1 rounded-full pr-2 pl-0.5 lg:ml-auto"
            >
              {
                React.createElement(ArrowRightOnRectangleIcon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1 ",
                })}
                sign in
            </a>}
        {/* <Button variant="text" size="sm" className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto">
              sign in <ArrowRightOnRectangleIcon/>
            </Button> */}
         
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll" >
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
