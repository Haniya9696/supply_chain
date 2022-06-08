import Home from 'app/view/Home/Home';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Distributer from '../views/Distributer/Distributer';
import Manufacturer from '../views/Manufacturer/Manufacturer';
export const AppRoutes = [
    {
        path: "/",
        component: <Home />
    },
    {
        path: "/sign-in",
        component: <SignIn />
    },
    {
        path: "/sign-up",
        component: <SignUp />
    },
    {
        path: "/distributer",
        component: <Distributer />
    },
    {
        path: "/manufacturer",
        component: <Manufacturer />
    },
]