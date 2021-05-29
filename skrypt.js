
function funkcja(imie,nazwisko,email)
{
    const reImie = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]{3,}$/g;
    if(reImie.test(String(imie).toLowerCase())&&/[A-Z]/.test(imie[0])){
        document.getElementById('paragrafimie').innerHTML=imie
    }
    else {
        alert("Imie jest niepoprawne");
    }
    const reNazwisko = /^[a-zA-ZąĄćĆęĘłŁńŃóÓśŚźŹżŻ]{3,}$/g;
    if(reNazwisko.test(String(nazwisko).toLowerCase())&&/[A-Z]/.test(nazwisko[0])){
        document.getElementById('paragrafnazwisko').innerHTML=nazwisko
    }
    else {
        alert("Nazwisko jest niepoprawne");
    }
    const reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(reEmail.test(String(email).toLowerCase())){
        document.getElementById('paragrafemail').innerHTML=email
    }
    else{
        alert("Email jest niepoprawny");
    }
}

function funkcja2(liczby)
{
    const reLiczby = /^\d+$/;
    if(reLiczby.test(liczby)){
    const liczba = [];
    var max=0;
    for(var i=0;i<liczby.length;i++){
        liczba[i]=liczby[i];
        if(liczba[i]>max)
        {
            max=liczba[i];
        }
    }
    document.getElementById('najliczba').innerHTML="Największa liczba to: "+max;
}
else
{
    alert("Podaj poprawnie liczby");
}
}

function fibonacci(nrLiczby)
{
    const reLiczby = /^\d+$/;
    if(reLiczby.test(nrLiczby)){
        var a=1;
        var b=1;
        var c=0;
        for(var i=0;i<nrLiczby-1;i++)
        {
            c=a+b;
            a=b;
            b=c;
        }
        document.getElementById('paragraffibonacci').innerHTML=nrLiczby+" liczba fibonacciego wynosi: "+b
    }
    else
    {
        alert("Podaj poprawny numer liczby");
    }
}

function nwd(pNwd,dNwd)
{
    const reLiczby = /^\d+$/;
    if(reLiczby.test(pNwd)&&reLiczby.test(dNwd))
    {
        var pom;
    
        while(dNwd!=0)
        {
            pom = dNwd;
            dNwd = pNwd%dNwd;
            pNwd = pom;	
        }
            document.getElementById('paragrafnwd').innerHTML="NWD podanych liczb wynosi: "+pNwd;
    }
    else
    {
        alert("Podaj poprawne liczby");
    }

}