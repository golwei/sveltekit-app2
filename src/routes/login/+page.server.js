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

let db = {
    getUser: async (/** @type {any} */ email) => 'zhang3',
    createSession: async (/** @type {any} */ user) => {
        return 'zhang3'
    }
}
/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        const user = await db.getUser(email);
        cookies.set('sessionid', await db.createSession(user));

        return { success: true };
    },
    register: async (event) => {
        // TODO register the user
    }
};