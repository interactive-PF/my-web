import { lazy } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const Home = lazy(async () => import('../components/Home'));
const About = lazy(async () => import('../components/About'));
const RootLayout = lazy(async () => import('../layout/RootLayout'));

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="About" element={<About />} />
		</Route>,
	),
);

export default router;
