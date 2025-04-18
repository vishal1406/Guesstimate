import WordleGame from "@screens/wordle";

export const PRIVATE_ROUTES = [
  {
    path: "/games/guesstimate",
    component: <WordleGame />,
  },
];

export const PUBLIC_ROUTES = [
  {
    path: "/games/guesstimate",
    component: <WordleGame />,
  },
];
