<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href='{{ url("css/app.css") }}'>
        <script src='{{ asset('js/app.js') }}' defer></script>
    </head>
    <body class="antialiased">
        <div class="wrapper-top-page">
            <div id="example">
            </div>
            <div id="extra">
            </div>
        </div>
        <div class="wrapper-middle-page-1" id="landing">
            <div id="landingview">
            </div>
        </div>
        <div class="wrapper-middle-page-2" id="halamanproduk">
            <div id="productview">
            </div>
        </div>
        <div class="wrapper-botom-page-1">
            <div id="listviewer">
            </div>
        </div>
        <div class="footer-wrapper">
            <div id="listviewer">
            </div>
        </div>
    </body>
</html>
