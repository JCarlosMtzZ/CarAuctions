export { auth as middleware } from '@/auth';

export const config = {
    matcher: [
        '/session',
        '/auctions/create',
        '/auctions/update/:id'
    ],
    pages: {
        signIn: '/api/auth/signin'
    }
};