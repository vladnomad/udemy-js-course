// 1st try - correct but bulky

/* 
function amountOfPages(summary){
    let str = "";

    for (let i = 1; i <= summary; i++) {
        str += `${i}`;
    }

    str = str.slice(0, summary);

    if (str.length <= 9) {
        str = str.slice(str.length - 1, str.length);
    } else if (str.length > 9 && str.length <= 189) {
        str = str.slice(str.length - 2, str.length);
    } else if (str.length > 189 && str.length <= 2889) {
        str = str.slice(str.length - 3, str.length);
    } else {
        str = str.slice(str.length - 4, str.length);
    }

    return Number(str);
} 
*/

// 2nd try

function amountOfPages(summary){
    let str = "",
        n = 0;

    for (let i = 1; i <= summary; i++) {
      str += i;
      if (str.length === summary) {
        n = i;
        break;
      }
    }

    return n;
}

amountOfPages(185);