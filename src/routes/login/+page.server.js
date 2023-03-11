import { fail, redirect } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, params, fetch, cookies }) => {
    console.log('会话id');
    console.log(cookies.get('sessionid'));
    console.log('会话id');
    let user = { uname: 'user1' }
    return { user }
}

let db = {
    getUser: async (/** @type {any} */ email) => 'zhang3',
    createSession: async (/** @type {any} */ user) => `seessionid${user}`
}

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('username');
        if (!email) {
            return fail(400, { email, missing: true });
        }
        console.log('email-->', email);
        const password = data.get('password');

        const user = await db.getUser(email);
        cookies.set('sessionid', await db.createSession(user));

        return { success: true };
    },
    register: async (event) => {
        // TODO register the user
    }
};