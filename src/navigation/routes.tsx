import WordleGame from "../screens/games";

export const PRIVATE_ROUTES = [
  {
    path: "/home",
    component: <WordleGame />,
  },
];

export const PUBLIC_ROUTES = [
  {
    path: "/home",
    component: <WordleGame />,
  },
];
