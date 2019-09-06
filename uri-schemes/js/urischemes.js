document.addEventListener('DOMContentLoaded', function() {
    //Inicializamos Floating Button
    var elems = document.querySelectorAll('.fixed-action-btn');
    var options = "direction: 'top', hoverEnabled: true";
    var instances = M.FloatingActionButton.init(elems, options);

    function enviarURI(u) {
        a = document.createElement('a');
        h = a.setAttribute('href', u);
        a.click();
    }

    document.getElementById('llamar').addEventListener("click", function() {enviarURI('tel:5491157358854');})
    document.getElementById('sms').addEventListener("click", function() {enviarURI('sms://+5491157358854?body=Hola%20Fernando.%20Estoy%20probando%20los%20URI%20Schemes!');})
    document.getElementById('wapp').addEventListener("click", function() {enviarURI('https://wa.me/5491157358854?text=Hola%20Fernando.%20Estoy%20probando%20los%20URI%20Schemes!');})
    document.getElementById('skype').addEventListener("click", function() {enviarURI('skype:skype.test.user.1?call&;video=true');})
    //Para ANDROID utilizar geo://
    //Para iOS utilizar maps://
    //o, en su defecto, utilizar maps.google.com... / maps.apple.com... (respectivamente)
    document.getElementById('gps').addEventListener("click", function() {enviarURI('geo://-34.636026,-58.413094');})
});