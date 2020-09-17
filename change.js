function change() {
    var things = document.getElementsByClassName("result-text");

    for(let i = 0; i < things.length; i++) {
        var element = things[i];
        var node = element.childNodes[0];
        if(element.childElementCount > 1) {
            continue;
        }
        flag = true;
        if(node.getAttributeNames()[0] != 'href') { // ce인지, 점수인지 검사.
            flag = false;
            element.removeChild(node);
        }
        if(flag) { // Compile error. for href.
            if (node.className == "result-ce ") { // 하이퍼 링크 있는 컴파일 에러
                var n = node.childNodes[0];
                node.removeChild(n);
                var a = document.createElement("span")
                var b = document.createElement("span");
                var c = document.createElement("span");
                var d = document.createElement("span");
                a.className = "result-ce ";
                a.appendChild(document.createTextNode("컴파일러는 "));
                b.className = "result-ac ";
                b.appendChild(document.createTextNode("맞았습니다. "));
                c = document.createElement("span");
                c.appendChild(document.createTextNode("니는 "));
                d.className = "result-wa ";
                d.appendChild(document.createTextNode("틀렸습니다!"));
                node.appendChild(a);
                node.appendChild(b);
                node.appendChild(c);
                node.appendChild(d);
            }
        }
        else if(node.className == "result-tle ") {
            var a = document.createElement("span");
            a.className = "result-tle "
            a.appendChild(document.createTextNode("우리 할머니도 그거보다 더 빠르겠다"))
            element.appendChild(a)
        }
        else if(node.className == "result-ac ") {
            var a = document.createElement("span");
            a.className = "result-ac "
            a.appendChild(document.createTextNode("이게 왜맞지"))
            element.appendChild(a)
        }
        else if(node.className == "result-rte ") {
            var a = document.createElement("span");
            var b = document.createElement("span");
            var c = document.createElement("span");
            var d = document.createElement("span");
            a.className = "result-rte ";
            a.appendChild(document.createTextNode("뭔가 잘못됨."));
            element.appendChild(a);
        }
        else if (node.className == "result-ce ") { //남 코드 컴파일 에러
            var a = document.createElement("span")
            var b = document.createElement("span");
            var c = document.createElement("span");
            var d = document.createElement("span");
            a.className = "result-ce ";
            a.appendChild(document.createTextNode("컴파일러는 "));
            b.className = "result-ac ";
            b.appendChild(document.createTextNode("맞았습니다. "));
            c = document.createElement("span");
            c.appendChild(document.createTextNode("니는 "));
            d.className = "result-wa ";
            d.appendChild(document.createTextNode("틀렸습니다!"));
            element.appendChild(a);
            element.appendChild(b);
            element.appendChild(c);
            element.appendChild(d);
        }
        else if(node.className == "result-wa ") {
            var a = document.createElement("span");
            var b = document.createElement("span");
            var c = document.createElement("span");
            var d = document.createElement("span");
            a.className = "result-wa ";
            a.appendChild(document.createTextNode("데이터는 "));
            b.className = "result-ac ";
            b.appendChild(document.createTextNode("맞았습니다. "));
            c = document.createElement("span");
            c.appendChild(document.createTextNode("니는 "));
            d.className = "result-wa ";
            d.appendChild(document.createTextNode("틀렸습니다!"));
            element.appendChild(a);
            element.appendChild(b);
            element.appendChild(c);
            element.appendChild(d);
        }
        else if(node.className == "result-ole ") {
            var a = document.createElement("span");
            var b = document.createElement("span");
            var c = document.createElement("span");
            var d = document.createElement("span");
            a.className = "result-wa ";
            a.appendChild(document.createTextNode("데이터는 "));
            b.className = "result-ac ";
            b.appendChild(document.createTextNode("맞았습니다. "));
            c = document.createElement("span");
            c.appendChild(document.createTextNode("출력은 "));
            d.className = "result-wa ";
            d.appendChild(document.createTextNode("너무 많습니다!"));
            element.appendChild(a);
            element.appendChild(b);
            element.appendChild(c);
            element.appendChild(d);
        }
        else if(node.className == "result-mle ") {
            var a = document.createElement("span");
            var b = document.createElement("span");
            var c = document.createElement("span");
            var d = document.createElement("span");
            a.className = "result-mle ";
            a.appendChild(document.createTextNode("메모리는 "));
            b.className = "result-ac ";
            b.appendChild(document.createTextNode("개인주의야. "));
            c = document.createElement("span");
            c.appendChild(document.createTextNode("채점기는 "));
            d.className = "result-wa ";
            d.appendChild(document.createTextNode("생각도 하지 않아."));
            element.appendChild(a);
            element.appendChild(b);
            element.appendChild(c);
            element.appendChild(d);
        }
        else if(node.className == "result-pe ") {
            var a = document.createElement("span");
            var b = document.createElement("span");
            var c = document.createElement("span");
            var d = document.createElement("span");
            a.className = "result-pe ";
            a.appendChild(document.createTextNode("출력 안지킬려 했어? "));
            b.className = "result-wa ";
            b.appendChild(document.createTextNode("그런 짓은 하지마."));
            element.appendChild(a);
            element.appendChild(b);
        }
    }
}
window.onchange = change()