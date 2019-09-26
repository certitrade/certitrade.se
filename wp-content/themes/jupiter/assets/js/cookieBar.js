class cookieBar {
    constructor(opt) {

        if (localStorage.getItem('acceptCookies')) {
            return;
        }

        const def = {
            id: 'cookieBar',
            class: false,
            innerHTML: 'V&aring;r webbplats anv&auml;nder sig av cookies. ',
            fontFamily: "inherit",
            color: "white",
            background: "black",
            padding: "10px 0",
            textAlign: "center",
            position: "fixed",
            bottom: "0",
            left: "0",
            right: "0",
            width: "100%",
        }

        const bar = document.createElement('div');


        bar.id = opt.id || def.id;
        bar.class = opt.class || def.class;
        bar.innerHTML = opt.innerHTML || def.innerHTML;
        bar.style.zIndex = "9999";

        if (!bar.class) {
            bar.style.fontFamily = opt.fontFamily || def.fontFamily;
            bar.style.color = opt.color || def.color;
            bar.style.background = opt.background || def.background;
            bar.style.padding = opt.padding || def.padding;
            bar.style.textAlign = opt.textAlign || def.textAlign;
            bar.style.position = opt.position || def.position;
            bar.style.bottom = opt.position || def.bottom;
            bar.style.left = opt.left || def.left;
            bar.style.right = opt.right || def.right;
            bar.style.width = opt.width || def.width;
        }

        if (!opt.innerHTML) {
            const infoBtn = document.createElement('a');
            infoBtn.style.color = bar.style.color;
            infoBtn.style.textDecoration = "underline";
            infoBtn.href = "https://certitrade.se/cookies/";
            infoBtn.innerHTML = "L&auml;s mer";
            bar.appendChild(infoBtn);
        }

        const agreeOpt = opt.agreeBtn || {};
        const agreeBtn = this.agreeBtn(agreeOpt, bar);
        const hideBar = this.hideBar;

        bar.appendChild(agreeBtn);

        document.getElementsByTagName('body')[0].appendChild(bar);

        agreeBtn.addEventListener('click', function () { hideBar(bar.id) });

    }

    agreeBtn(opt, bar) {

        const def = {
            id: 'cookieBar-agreeBtn',
            innerHTML: 'Ok, jag f&ouml;rst&aring;r',
            padding: "5px 10px",
            margin: "3px 10px",
            background: "#444",
            textDecoration: "underline",
            cursor: "pointer",
            display: "inline-block",
        };

        var btn = document.createElement('span');

        btn.id = opt.id || def.id;
        btn.innerHTML = opt.innerHTML || def.innerHTML;

        if (!bar.class) {
            btn.style.background = opt.background || def.background;
            btn.style.padding = opt.padding || def.padding;
            btn.style.margin = opt.margin || def.margin;
            btn.style.textDecoration = opt.textDecoration || def.textDecoration;
            btn.style.cursor = opt.cursor || def.cursor;
            btn.style.display = opt.display || def.display;
        }
    
        return btn;
    }

    hideBar(id) {

        localStorage.setItem('acceptCookies', 'true');

        document.getElementById(id).style.display = 'none';

    }

}
