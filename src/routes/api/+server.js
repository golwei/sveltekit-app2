import { json } from '@sveltejs/kit';
import { User, Product } from "$lib/models";
// import { json } from "@sveltejs/kit";
/** @type {import('./$types').RequestHandler} */
export async function GET() {
    // User.sync()
    // Product.sync()
    const user = await User.findAll({
        where: {
            id: 5
        }
    })
    console.log(JSON.stringify(user));
    // const user = await User.bulkCreate([
    //     {
    //         username: '张三1',
    //         password: '123',
    //         email: 'lizhiweimail121'
    //     }, {
    //         username: '张三2',
    //         password: '123',
    //         email: 'lizhiweimail311'
    //     }
    // ])
    // const user = await User.create({
    //     username: '李四1',
    //     password: '123',
    //     email: 'lizhiweimail12121'
    // });
    return json(JSON.parse(JSON.stringify(user)))
    // return new Response()
}
