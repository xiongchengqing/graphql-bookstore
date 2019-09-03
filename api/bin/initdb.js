const db = require('../src/service/db')
const { Book, Classification } = require('../src/schema')
async function run() {
    await db.connect()
    let classifications = await Classification.insertMany([
        {
            name: '计算机科学'
        },
        {
            name: '数学'
        }
    ])
    await Book.insertMany([
        {
            name: '微积分入门',
            author: '小平邦彦',
            classificationId: classifications[1]._id
        },
        {
            name: '代码大全',
            author: '史蒂夫·迈克康奈尔',
            classificationId:  classifications[0]._id
        },
        {
            name: '实现领域驱动设计',
            author: 'Vaughn Vernon',
            classificationId:  classifications[0]._id
        }
    ])
}

run()