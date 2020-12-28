<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/x-icon" href="../icons/logo.png">
    <link rel="stylesheet" href="../style/style.css">
    <title>AngusFire | Acustic</title>
</head>
<body>
    <header id="header">
        <div class="logo">
            <img id="header-img" src="../icons/guitarra.png" alt="augus_fire">
        </div>
        <nav id="nav-bar">
            <ul class="menu">
                <li class = "menu-item"><a class="nav-link" href="../index.php">Home</a></li>
            </ul>
        </nav>
    </header>
    <section class="acustic">
        <div class="product">
            <div class="level">Jumbo guitar</div>
            <img src="https://www.audiomusica.com.pe/pub/media/catalog/product/1/1/1100115_guitarra-electroacustica-takamine-jumbo-gj72ce-color-natural-nat.jpg" alt="Acústica Jumbo">
            <button class="btn" onClick="confirmar()">Select</button>
        </div>
        <div class="product">
            <div class="level">Dreadnought guitar</div>
            <img src="https://www.guitarfromspain.com/6957-large_default/alhambra-dreadnought-model-acoustic-guitar.jpg" alt="Acústica Dreadnought">
            <button class="btn" onClick="confirmar()">Select</button>
        </div>
        <div class="product">
            <div class="level">Auditorium guitar</div>
            <img src="https://www.woodbrass.com/images/SQUARE400/woodbrass/TAYLOR+314CE+V+CLASS+2018.JPG" alt="Acústica Auditorium">
            <button class="btn" onClick="confirmar()">Select</button>
        </div>
        <div class="product">
            <div class="level">Grand Concert guitar</div>
            <img src="https://godinguitars.com/wp-content/uploads/2020/10/49479_Multiac_Grand_Concert_Deluxe.jpg" alt="Acústica Grand Concert">
            <button class="btn" onClick="confirmar()">Select</button>
        </div>
        <div class="product">
            <div class="level">Concert guitar</div>
            <img src="https://www.stars-music.com/medias/yamaha/gc22c-600-103920-rotate.jpg" alt="Acústica Concert">
            <button class="btn" onClick="confirmar()">Select</button>
        </div>
    </section>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="../js/confirm.js"></script>
</body>
</html>