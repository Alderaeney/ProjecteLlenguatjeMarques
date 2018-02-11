<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SuperTuxKart</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/contact.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="shortcut icon" href="../img/favicon.png" type="image/x-icon">
</head>
<body>
    <div id="pagina">
        <header>
            
        </header>
        <nav>
            <ul>
                <li>
                    <a href="#">No Name Prod. >_</a>
                </li>
                <li class="active">
                    <a href="#">Home</a>
                </li>
                <li class="dropdown">
                    <a href="#">Projects
                    </a>
                    <ul class="dropdown-content">
                        <li>
                            <a href="./html/supertux.html" class="drop-cont">SuperTuxKart</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="./include/contact.php">Contact</a>
                </li>
                <li>
                    <a href="./html/media.html">Media</a>
                </li>
            </ul>
        </nav>
        <main>
            <article>
                <form action="mailto:clase@airmail.cc" method="get">
                    <label for="name">Name: </label><br>
                    <input type="text" name="name" id="name" required><br>
                    <label for="email">E-mail: </label><br>
                    <input type="email" name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" required><br>
                    <label for="comment">Comment: </label><br>
                    <textarea name="comment" id="comment" cols="30" rows="10" required></textarea><br>
                    <input type="submit" id="send" value="Send"><br>
                </form>
                <?php
                    $var = $_GET["send"];
                    if (isset($var)) {
                        echo "Your message was sent.";
                    }
                ?>
            </article>
        </main>
        <footer>
            <div id="lin"></div>
            <div id="izq">
                <h4>
                    No Name Productions >_
                </h4>
                <p>
                    Valencia, Plaza Mayor Nº 50, 45560 <br>
                    Spain
                </p>
            </div>
            <div id="drc">
                <p>
                    License GPL v3.0 <br>
                </p>
            </div>
        </footer>
    </div>
</body>
</html>