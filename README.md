Connector for JavaScript
========================

Add a ft.js to your web page:

    <head>
        <script src='ft.js'></script>
    </head>

Create a new instance of FT which accepts token of your project from [failtracker.com](http://failtracker.com).

    <script type="text/javascript">
        var ft = new FT("[project token]");
        ft.send('Title', 'Detailed message about failure', function (data) {
            console.log(data)
        });
    </script>
