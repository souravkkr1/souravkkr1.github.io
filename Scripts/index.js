const skillsInfo = [
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", title: "HTML" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", title: "CSS" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", title: "JavaScript" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", title: "React" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", title: "NodeJs" },
    { img: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png", title: "ExpressJs" },
    { img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", title: "Mongo DB" },
    { img: "https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true", title: "Charkra UI" },
    { img: "https://sunilrath101.github.io/static/media/redux-240.8442924faa3925456ec8.png", title: "Redux" },
    { img: "https://www.nicepng.com/png/full/52-520535_free-files-github-github-icon-png-white.png", title: "GitHub" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Figma-1-logo.png", title: "Figma" },
    { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png", title: "VS Code" },
]

let container = document.querySelector(".skills-box");

skillsInfo.map((item) => {
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    let img = document.createElement("img");
    img.setAttribute("src", item.img)
    img.setAttribute("alt", item.title)
    let title = document.createElement("h4");
    title.innerText = item.title
    title.style.color = "#8E05C2"
    title.style.marginTop = "10px"

    div.append(img, title);
    container.append(div)
})

// Ham-Menu-Close

let menu = document.querySelector(".ham-menu")

function closeFunc() {
    menu.style.display = "none"
    // alert("yooooo")
    // console.log("hii")
}
function openFunc() {
    menu.style.display = "block"
}

// Contact Form

function sendMail() {
    let params = {
        from_name: document.getElementById("full-name").value,
        email_id: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
    }
    emailJs.send("service_8964ntz", "template_74gsu6s", params).then(function (res) {
        alert("Success" + res.status)
    })
}

