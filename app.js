var moment = require('moment')

var mediumRoute = {
    formateData: (time) => {
        return moment().format(time)
    }
}

module.exports = mediumRoute