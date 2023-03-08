import { fail, redirect } from '@sveltejs/kit';
/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url, params, fetch }) => {
    //   const resourceUrl = `api`;
    //   const res = await fetch(resourceUrl);

    //   if (res.ok) {
    //     return {
    //       status: res.status,
    //       props: {
    //          propName: await res.json()
    //       }
    //     };
    //   }

    //   return {
    //     status: res.status,
    //     error: new Error(`Could not load url`)
    //   };
}

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ url, request }) => {
        console.log('====== login ======');
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');
        // return fail(400, { incorrect: true });
        if (username=='admin'&&password=='123') {
            throw redirect(303, '/upload')
        }
    },
    register: async (event) => {
        console.log('====== register ======');
        console.log(event);
    },

};