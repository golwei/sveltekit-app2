import { inspect } from "util";
import { createWriteStream, createReadStream } from "fs";
/** @type {import('./$types').Actions} */
export const actions = {
    uploadfile: async ({ request }) => {
        console.log(inspect(await request.formData()));
        // let data = await request.formData()
        // request.formData().then(async (data) => {
        //     const file = data.get('imgs')
        //     if (!file) {
        //         return {
        //             status: 400,
        //             body: 'No file found',
        //         };
        //     }
        //     // 保存文件到本地磁盘
        //     // const filePath = `./${file.name}`;
        //     // const writable = createWriteStream(filePath);
        //     // let buf = await file.arrayBuffer()
        //     // writable.write(Buffer.from(buf))
        //     // return {
        //     //     status: 200,
        //     //     body: 'File uploaded successfully',
        //     // };

        // });


    }
};