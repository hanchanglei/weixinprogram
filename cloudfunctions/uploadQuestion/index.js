// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const questionsCollection = db.collection("question")

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

//console.log(event)
//将event存储的数据库中
  let result = await questionsCollection.add({
    data:event
  })

  return {
    result
  }
}