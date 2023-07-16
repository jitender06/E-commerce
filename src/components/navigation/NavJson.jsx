export const routes = [
  { name: "Home", link: "/" },
  {
    name: "Services",
    link: "/",
    subRoutes: [
      { name: "Web", link: "/" },
      { name: "App", link: "/" },
      { name: "Application", link: "/" },
      { name: "UI/UX", link: "/" },
    ],
  },
  { name: "Products", link: "/" },
];
