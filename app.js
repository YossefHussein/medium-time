var moment = require('moment')

var mediumRoute = {
  formateData: (time) => {
    return moment().format(time)
  },
  formatAsDay: (day) => {
    return moment().format(day)
  },
}

module.exports = mediumRoute
