import logo from "../assets/sidenav/logo.svg";
import dashboard from "../assets/sidenav/dashboard.svg";
import trendup from "../assets/sidenav/trendup.svg";
import users from "../assets/sidenav/users.svg";
import box from "../assets/sidenav/box.svg";
import info from "../assets/sidenav/info.svg";
import sun from "../assets/sidenav/sun.svg";
import moon from "../assets/sidenav/moon.svg";
import sun_w from "../assets/sidenav/sun_w.svg";
import moon_w from "../assets/sidenav/moon_w.svg";
import arrowright from "../assets/sidenav/arrowright.svg";
import settings from "../assets/sidenav/settings.svg";
import logout from "../assets/sidenav/logout.svg";
import calender from "../assets/topnav/calender.svg";
import bell from "../assets/topnav/bell.svg";
import avatar from "../assets/topnav/avatar.png";
import chevron from "../assets/topnav/chevron.svg";

export const navicons = [
  { icon: logo, name: "Logo" },
  { icon: dashboard, name: "Dashboard" },
  { icon: trendup, name: "Trendup" },
  { icon: users, name: "Users" },
  { icon: box, name: "Box" },
  { icon: info, name: "Info" },
];

export const themeicons = [
  { icon: sun, active: sun_w, name: "Light" },
  { icon: moon, active: moon_w, name: "Dark" },
];

export const controlicons = [
  { icon: arrowright, name: "Arrowright" },
  { icon: settings, name: "Settings" },
  { icon: logout, name: "Logout" },
];

export const topnavIcons = {
  calender,
  bell,
  avatar,
  chevron,
};
