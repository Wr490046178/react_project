import Mock from 'mockjs'
//mock模拟数据
Mock.mock('/api/list', {
    'list|5-10': [
        {
            'name': '@cname',
            'id|+1': 1,
            'img': '@image(100x100,@color)',
            'title': '@ctitle',
            'phone': '176****5636',
            'children|10-20': [
                {
                    'id|+1': 1,
                    'title': '@ctitle',
                    'price|10-20': 1,
                    'content': '@ctitle',
                    'img': '@image(100x100,@color)',
                    'issc': false,
                    flag: false,
                    num: 0
                }
            ]
        }
    ]
});


// let Mock=require('mockjs')
// let fs=require('fs')
// let data=Mock.mock({
//       'list|5-10': [
//         {
//             'name': '@cname',
//             'id|+1': 1,
//             'img': '@image(100x100,@color)',
//             'title': '@ctitle',
//             'phone': '176****5636',
//             'children|10-20': [
//                 {
//                     'id|+1': 1,
//                     'title': '@ctitle',
//                     'price|10-20': 1,
//                     'content': '@ctitle',
//                     'img': '@image(100x100,@color)',
//                     'issc': false,
//                     flag: false,
//                     num: 0
//                 }
//             ]
//         }
//     ]
// })
// fs.writeFileSync('data.json',JSON.stringify(data.list))
// let list=require('./data.json')
// Mock.mock('/list',list)
const user=require("./user.json")
console.log(user);
Mock.mock("/api/user",user)
// (req,res)=>{
    // console.log(req.query,res);
//     const {use,pwd} =req.body
//     const userFlage=user.filter(item=>item.use===use&&item.pwd===pwd)[0]
//     if(userFlage){
//       res.send({
//         code:200,
//         token:"TOKEN",
//         use:use,
//         pwd:pwd
//       })
//     }else{
//       res.send({
//         code:500,
//       })
//     }
// })

