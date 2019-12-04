// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const questionCollection = db.collection("question")

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  let answer = await questionCollection.where({}).get() 

  return {
    answer
  }
}