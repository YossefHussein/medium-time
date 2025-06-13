var moment = require('moment')

var mediumRoute = {
  formateData: (time) => {
    return moment().format(time)
  },
  formatAsDay: (day) => {
    return moment().format(day)
  },
}

console.log(mediumRoute.formatAsDay('dddd'))

module.exports = mediumRoute
