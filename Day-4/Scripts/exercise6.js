let monthUserInput = prompt('Enter a month');

// Kullanıcı girdisini formatlıyoruz
let month = monthUserInput.charAt(0).toUpperCase() + monthUserInput.slice(1).toLowerCase();

// Ayın geçerli olup olmadığını kontrol etmek için
const validMonths = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
  'September', 'October', 'November', 'December'
];

if (!validMonths.includes(month)) {
    console.log('Invalid month input. Please enter a valid month.');
} else {
    // Switch bloğu ay için gün sayısını yazdırır
    switch(month) {
        case 'September':
        case 'November':
        case 'April':
        case 'June':
            console.log(`${month} has 30 days.`);
            break;
        
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            console.log(`${month} has 31 days.`);
            break;
        
        case 'February':
            console.log(`${month} has 29 days.`); 
            break;
        default: 
        console.log('Invalid month input. Please enter a valid month.')
    }
}
