const marked = require('marked');
const fs = require('fs');

const inFile = process.argv[2]
const outFile = process.argv[3]

const inputContent = fs.readFileSync(inFile, 'utf8')

const renderer = new marked.Renderer();
const heading = renderer.heading.bind(renderer)
renderer.heading = (text, level, raw, slugger) => {
    let cls = ` class="matter-h${level}">`
    if (level == 1) {
        cls = ` class="matter-h${level} matter-primary-text">`
    } else if (level == 2) {
        cls = ` class="matter-h${level} matter-secondary-text">`
    }
    return heading(text, level, raw, slugger).replace(/>/i, cls)
}
const link = renderer.link.bind(renderer);
renderer.link = (href, title, text) => {
    return link(href, title, text).replace(/>/i, 'class="matter-link">');
};

marked.use({ renderer })

const content = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>Learn Languages 2021</title>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
<link href="https://res.cloudinary.com/finnhvman/raw/upload/matter/matter-0.2.2.css" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>
<span class="material-body1">
${marked(inputContent)}
</span>
<script type="text/javascript" src="js/materialize.min.js"></script>
</body>
</html>`

fs.writeFileSync(outFile, content)
