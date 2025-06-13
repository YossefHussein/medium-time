class MediumRouteAsTime extends mediumRoute{
     formatAsDay(day = 'd') {
        return moment().format(day)
    }
}

module.exports = MediumRouteAsTime