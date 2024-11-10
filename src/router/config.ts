const HOME = '/';
const ERROR = '/error';

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    error: {
        path: ERROR,
        to: (title: string, message?: string) => `${ERROR}?title=${title}&message=${message}`,
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;
