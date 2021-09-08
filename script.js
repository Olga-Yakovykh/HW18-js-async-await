//                             // console.log(#3)
function delay(data, ms) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(data)
        }, ms) 
    })
}
delay({name: "user"}, 1000).then((data) => console.log("Hello!", data))


                            // console.log(#4)
let userInfo = { name: 'Vic', age: 21, id: 1 }
async function getUserInfo() {
  await delay(userInfo,1000)
  return userInfo
}
async function getUserAvatar(userInfo) {
  userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
  return await delay(userInfo,1000)
}
async function getUserAdditionalInfo(userInfo) {
  userInfo.interests = ['sport', 'books'];
  return await delay(userInfo,1000)
}
async function getResult() { 
  let result = await getUserInfo();
  let result2 = await getUserAvatar(userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg');
  let result3 = await getUserAdditionalInfo(userInfo.interests = ['sport', 'books']);
  console.log(result, result2, result3)
}
getResult();

                        // console.log(#5)
  
async function getUser() {
  return { name: 'Vic', age: 21, id: 1 };
}
async function getInfo() {
  let user = await getUser();
  throw new Error('error');
}
getInfo()
  .catch((error) => {
    console.log(`err: ${error}`)
})
  