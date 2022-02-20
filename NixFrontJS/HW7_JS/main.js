let city = {
Париж: "Франция",
Мадрид: "Испания",
Киев: "Украина"
};

for (let keys in city) {
    console.log(keys + " - это " + city[keys]);
}


switch (browser) {
    case 'Edge':
        alert("You`ve gor the Edge!");
        break;
        case 'Chrome':
        case 'Firefox':
        case 'Safary':
        case 'Opera':
            alert("Okey we support these browsers too");
            break;
            default:
                alert("We hope that this page look ok!");
}

function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );