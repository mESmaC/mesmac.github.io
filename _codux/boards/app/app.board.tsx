import { createBoard } from '@wixc3/react-board';
import { createRemixStub } from '@remix-run/testing';
import App from 'app/root';
import HomePage from 'app/routes/_index/route';
import { ROUTES } from '~/router/config';

const AppWrapper = createRemixStub([
    {
        Component: () => {
            return <App />;
        },
        children: [
            {
                path: ROUTES.home.path,
                Component: HomePage,
            },
        ],
    },
]);

export default createBoard({
    name: 'App',
    Board: () => <AppWrapper />,
});
