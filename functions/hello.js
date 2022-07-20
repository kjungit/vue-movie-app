exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "kjun",
      age: 93,
      email: "kjun_all@naver.com"
    })
  }
};