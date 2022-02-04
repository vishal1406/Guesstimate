import Home from "../screens/home";
import SignIn from "../screens/signIn"

export const privateRoutes = [
    {
        path: "/home",
        component: <Home />
    },
];

export const publicRoutes = [
    {
        path: "/signIn",
        component: <SignIn />
    },
]