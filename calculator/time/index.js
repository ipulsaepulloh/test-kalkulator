console.log("Nama : Ipul")

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

const time = {
    createDateObject: (customDate = null) => {
        if (customDate) {
            return new Date(customDate)
        } else {
            return new Date()
        }
    },
    dateNumber: dateObject => {
        return dateObject.getDate()
    },
    dayString: dateObject => {
        const index = dateObject.getDay() - 1
        return days[index]
    },
    monthNumber: dateObject => {
        return dateObject.getMonth() + 1
    },
    monthString: dateObject => {
        const index = dateObject.getMonth()
        return months[index]
    },
    yearNumber: dateObject => {
        return dateObject.getFullYear()
    },
    displayFull: dateObject => {
        const chosenDay = time.dayString(dateObject)
        const chosenDate = time.dateNumber(dateObject)
        const chosenMonth = time.monthString(dateObject)
        const chosenYear = time.yearNumber(dateObject)
        const chosenFull = `${chosenDay}, ${chosenDate} ${chosenMonth} ${chosenYear}`
        return chosenFull
    }
}

const CUSTOM_DATE = time.createDateObject("10 Maret 1993")
const customFull = time.displayFull(CUSTOM_DATE)

console.log("Tanggal Lahir:", customFull)
