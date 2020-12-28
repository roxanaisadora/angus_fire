<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="./icons/logo.png">
    <link rel="stylesheet" href="./style/index.css">
    <title>Augus fire</title>
</head>
<body translate="no">
    <div id="page-wrapper">
        <header id="header">
            <div class="logo">
                <img id="header-img" src="./icons/guitarra.png" alt="augus_fire">
            </div>
            <nav id="nav-bar">
                <ul class="menu">
                    <li class = "menu-item"><a class="nav-link" href="#features">Features</a></li>
                    <li class = "menu-item"><a class="nav-link" href="#how-it-works">How it works</a></li>
                    <li class = "menu-item"><a class="nav-link" href="#pricing">Pricing</a></li>
                </ul>
            </nav>
        </header>
        <div class="container">
            <section id="data">
            <h1 id="secondary" class="secondary"></h1>
            <h2>★ Fame is in your hands ★</h2>
                <form id="form" action="https://www.freecodecamp.com/email-submit">
                    <input class="input" name="email" id="email" type="email" placeholder="Enter your email address" required="">
                    <input id="submit" type="submit" value="Get Started" class="btn">
                    
                </form>
            </section>
        </div>
        <div class="container">
            <section id="features">
                <div class="grid">
                    <div class="icon">
                        <img class="img--icon" src="./icons/material.png" alt="material">
                    </div>
                    <div class="desc">
                        <h2>Premium Materials</h2>
                        <p>
                        Our guitars use piece of wood, back or back made of rosewood, soundboard, usually made of spruce; It consists of 6 strings normally made of nylon. They are in tune from low to high: Mi, La, Re, Sol, Si, Mi. It also has a fretted neck that marks the upward progression in semitones along the strings.
                        </p>
                    </div>
                </div>
                <div class="grid">
                    <div class="icon">
                        <img class="img--icon" src="./icons/delivery_fast.png" alt="delivery">
                    </div>
                    <div class="desc">
                        <h2>Fast Shipping</h2>
                        <p>
                        We make sure you recieve your guitar as soon as we have finished
                        making it. We also provide free returns if you are not satisfied.
                        </p>
                    </div>
                </div>
                <div class="grid">
                    <div class="icon">
                        <img class="img--icon" src="./icons/quality.png" alt="quality">
                    </div>
                    <div class="desc">
                        <h2>Quality Assurance</h2>
                        <p>
                        For every purchase you make, we will ensure there are no damages or
                        faults and we will check and test the pitch of your instrument.
                        </p>
                    </div>
                </div>
            </section>
            <section id="how-it-works">
                <iframe id="video" width="1050" height="530" src="https://www.youtube.com/embed/-OKeDLeUfJ8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </section>
            <section id="pricing">
                <div class="product">
                    <div class="level">Acoustic guitar</div>
                    <h2>From $100 to $500</h2>
                    <ol>
                        <li>Jumbo</li>
                        <li>Dreadnought</li>
                        <li>Auditorium</li>
                        <li>Grand Concert</li>
                        <li>Concert</li>
                    </ol>
                    <button class="btn"><a href="/section/acustic.php"> Select </a></button>
                    
                </div>
                <div class="product">
                    <div class="level">Electric guitars</div>
                    <h2>From $200 to $1000</h2>
                    <ol>
                        <li>Stratocaster</li>
                        <li>Telecaster</li>
                        <li>Super Strat</li>
                        <li>Semi-acoustic guitar</li>
                        <li>Flying V</li>
                    </ol>
                    <button class="btn"><a href="/section/electric.php"> Select </a></button>
                </div>
                    <div class="product">
                    <div class="level">guitar accessories</div>
                    <h2>From $20 to $800</h2>
                    <ol>
                        <li>Guitar stand</li>
                        <li>Clamp tuner</li>
                        <li>Guitar tuner</li>
                        <li>Amplifier</li>
                        <li>Guitar picks</li>
                    </ol>
                    <button class="btn"><a href="/section/accessories.php"> Select </a></button>
                </div>
            </section>
            <footer>
                <ul>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <span>Copyright 2020, Original Guitar</span>
            </footer>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="./js/index.js"></script>
</body>
</html>
