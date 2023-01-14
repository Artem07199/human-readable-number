module.exports = function toReadable(number) {
        let ones = ['zero', 'one', 'two', 'three', 'four',
                'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];   
        let tens = ['twenty','thirty', 'forty','fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let digit = 0;
        let result = '';
        if (number < 20) return ones[number];   
        if (number < 100) {     
            digit = number % 10;
            result = tens[Math.floor(number/10)-2] + " " + (digit > 0 ? ones[digit] : "");
            return result.trim();
        }
        if (number < 1000) {    
            result = ones[Math.floor(number/100)] + " hundred " + (number % 100 > 0 ? toReadable(number % 100) : ""); 
            return result.trim();  
        }   
        if (number < 100000) {     
            return toReadable(Math.floor(number/1000)) + " thousand " + (number % 1000 > 0 ? toReadable(number % 1000) : "");   
        }   
};
