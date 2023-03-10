/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, params, locals }) => {
    console.log('========');
    console.log(locals);

    return {name:'123'}
}