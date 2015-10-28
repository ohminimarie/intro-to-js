for (var i = 100; i >= 1; i--) {
    var bottles = " Bottles of Beer on the Wall";
    
    if (i !== 1) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
    } else {
        console.log(i + " bottle of beer on the wall, " + i + " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}