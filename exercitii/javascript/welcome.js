var now = new Date();
var hour = now.getHours();

document.write("Este ora : " + hour + "." ); 
if(hour >= 12 && hour < 18) {
    document.write('Buna ziua!');
} else if (hour >= 18 && hour < 23) {
    document.write('Buna seara!'); 
} else if (hour >= 23 && hour < 4) {
    document.write('Noapte buna!');
} else {
    document.write('Buna dimineata!'); 
} 
