let tomb = ['adam', 'janos', 'pal', 'erno'];

function adjHozzaEgyLit(elem) {
    $(".simafelsorol:last-of-type").append("<li>" + elem + "</li>");
    
    }

    tomb.forEach(adjHozzaEgyLit)


let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  };

$('h1').text(additionalBlock.title);
$('p').text(additionalBlock.text);