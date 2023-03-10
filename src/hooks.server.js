import { redirect } from '@sveltejs/kit';
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve, }) {
    // event.locals = { user: '123' }

    console.log('hook==>');
    console.log(event.locals);
    console.log(event.url.pathname);
    // @ts-ignore
    // if (!event.locals.user&&event.url.pathname!='/login') {
    //     throw redirect(307, '/login');
    //   }
    // throw redirect(307, '/login');
    const { headers } = event.request;
    // @ts-ignore
    const token = headers.authorization?.split(' ')[1];

    // if (!token) {
    //     return new Response('验证失败!')
    // }
    const response = await resolve(event);
    return response

    // if (event.url.pathname.startsWith('/custom')) {
    //     return new Response('custom response');
    // }

    // const response = await resolve(event);
    // return response;
}