module.exports = function toReadable (number) {
    const units = ['','one','two','three','four', 'five','six','seven','eight','nine', 
        'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
        'seventeen','eighteen','nineteen'];
    const dozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    
    if (number === 0) {
        return 'zero'}
    if (number > 0 && number < 20) {
        return units[number]
    }
    if (number >= 20 && number < 100) {
        let wordNum = ''
        wordNum += dozens[Number(number.toString()[0])]
        wordNum += ' '
        wordNum += units[Number(number.toString()[1])]
        
        return wordNum.trim()  
        }
    if (number >= 100 && number < 1000) {
        if (number % 100 === 0) {
            return units[number.toString()[0]] + ' hundred'
        } 
        else if (number.toString()[1] === '0') {
            return units[number.toString()[0]] + ' hundred ' + units[number.toString()[2]]
        }
        else if (Number(number.toString().slice(1)) > 9 && (number.toString().slice(1)) < 20) {
            return units[number.toString()[0]] + ' hundred ' + units[(number.toString().slice(1))]
        }
        else { 
            return (units[number.toString()[0]] + ' hundred ' +  dozens[number.toString()[1]] + ' ' + units[number.toString()[2]]).trim()
        }
    }
        


    }



