
document.body = document.createElement('body');
document.body.style.background = 'red';
document.body.style.color = 'darkgreen';
let h1 = document.createElement('h1');
h1.textContent = 'JavaScript Hometask 7';
document.body.append(h1);
for (let j = 0; j < ((Math.random()) * 10) % 5; j++) {
    let ul = document.createElement('ul');
    for (let i = 0; i < (Math.random() * 10) % 5; i++) {
        let li = document.createElement('li');
        ul.append(li)
    }
    document.body.append(ul);
    document.body.append(document.createElement('br'));
}
let button = document.createElement('button');
button.textContent = 'Click me 3 times!';
button.style.background = "orange";
button.style.fontSize = 'large';
button.setAttribute("onclick", "three()");
document.body.append(button);
let slct = document.createElement('select');
for (let i = 0; i < 4; i++) {
    let option = document.createElement('option');
    switch (i) {
        case 0:
            option.setAttribute('disabled', 'true');
            option.setAttribute('selected', 'true');
            option.textContent = ' - University: ';
            break;
        case 1:
            option.textContent = ' --- Department of ISM ';
            break;
        case 2:
            option.textContent = ' --- Department of ECM ';
            break;
        default:
            option.textContent = '--- Department of Political Science';
            break;
    }
    slct.append(option);
}
slct.style.fontSize = 'large';
slct.style.background = 'yellow';
slct.id = 'text';
slct.hidden = true;
document.body.append(slct);
let counter = 0;
three = () => {
    let lis = document.body.querySelectorAll("li");
    let uls = document.body.querySelectorAll("ul");
    switch (++counter) {
        case 1:
            lis.forEach(x => x.textContent = Math.random());
            button.textContent = 'There are ' +
                lis.length + ' <li> in ' +
                uls.length + ' <ul>';
            break;
        case 2:
            uls.forEach((x) => { x.id = 'text' })
            document.body.querySelectorAll('*').forEach(x => { x.hidden = x.id === 'text' });
            break;
        default:
            button.hidden = true;
            slct.hidden = false;
            document.body.append(document.createElement('br'));
            document.body.innerHTML += "<br><style>.external-red {background-color: darkred}</style><a name=\"list\">LIST</a><ul><li><a href=\"http://google.com\">http://google.com</a></li><li><a href=\"/tutorial\">/tutorial.html</a></li><li><a href=\"local/path\">local/path</a></li><li><a href=\"ftp://ftp.com/my.zip\">ftp://ftp.com/my.zip</a></li><li><a href=\"http://nodejs.org\">http://nodejs.org</a></li><li><a href=\"http://internal.com/test\">http://internal.com/test</a></li></ul>";
            let hrefs = document.body.querySelectorAll('a[href ^="http://"]:not([href ^="http://internal.com"]),   a[href ^="ftp://"]');
            hrefs.forEach((x) => { x.setAttribute('class', 'external-red') });
            break;
    }
}
