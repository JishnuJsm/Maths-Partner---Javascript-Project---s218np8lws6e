# html-css-js-project-boilerplate
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Maths Partner</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./Maths Partner.css">
</head>
<body>
    <div class="title-bar">
        <h1>Math Partner</h1>
        <button class="save-btn">SAVED SOLUTIONS</button>
    </div>
    <div class="calculator">
        <div class="search">
            <h3>Problem</h3>
            <input class="input" type="text" placeholder="TYPE HERE . . . . . . .">
        </div>
        <div class="catogory">
            <h3>Select Category</h3>
            <select id="operation">
                <option value="simplify">Simplify</option>
                <option value="factor">Factor</option>
                <option value="derive">Derive</option>
                <option value="integrate">Integrate</option>
                <option value="zeroes">Find 0's</option>
                <option value="tangent">Find Tangent</option>
                <option value="area">Area Under Curve</option>
                <option value="cos">Cosine</option>
                <option value="sin">Sine</option>
                <option value="tan">Tangent</option>
                <option value="arccos">Inverse Cosine</option>
                <option value="arcsin">Inverse Sine</option>
                <option value="arctan">Inverse Tangent</option>
                <option value="abs">Absolute Value</option>
                <option value="log">Logarithm</option>
            </select>
        </div>
        <div class="search-btn">
            <i class="fa-2xl fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
    <div class="saved-solutions">
        
    </div>

    <script src="https://kit.fontawesome.com/ad2987ace2.js" crossorigin="anonymous"></script>
    <script src="./Maths Partner.js"></script>
</body>
</html>
