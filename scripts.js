let tomb = ['adam', 'janos', 'pal', 'erno'];
let i = 0;

function adjHozzaEgyLit() {
    $(".simafelsorol:last-of-type").append("<li>", tomb, "</li>");
    

    }

tomb.forEach(adjHozzaEgyLit)


let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  };

$('h1').text(additionalBlock.title);
$('p').text(additionalBlock.text);