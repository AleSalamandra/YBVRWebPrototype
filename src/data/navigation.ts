export type NavigationChild = {
  label: string;
  href: string;
};

export type NavigationItem = {
  label: string;
  href?: string;
  children?: NavigationChild[];
};


export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "YB Studios",
    href: "/studios",
  },

  {
    label: "YB Sports",
    href: "/sports",
  },

  {
    label: "YB Tech",
    href: "/tech",
    children: [
      {
        label: "YB Labs",
        href: "/labs",
      },
    ],
  },

  {
    label: "Products",
    children: [
      {
        label: "Xtadium",
        href: "/products/xtadium",
      },
      {
        label: "Cultvre",
        href: "/products/cultvre",
      },
      {
        label: "XMusic",
        href: "/products/xmusic",
      },
    ],
  },

  {
    label: "News",
    href: "/news",
  },
];