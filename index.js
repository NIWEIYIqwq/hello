const dayjs = require('dayjs')
require('dayjs/locale/zh-cn')

dayjs.locale('zh-cn')

const now = dayjs()

console.log('现在时间：', now.format('YYYY-MM-DD HH:mm:ss'))
console.log('今天是：  ', now.format('dddd'))
