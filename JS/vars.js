function numere (a,b)
{
    return a+b;
}

console.log(numere(2,3))

function numere1 (x)
{
    return 1+x;
}
console.log(numere1(6));

function varsta(v)
{
    return `Numarul de zile este ${365*v}`
}
console.log(varsta(29))

function tipDate(y)
{
    let t = typeof(y);
    if (t == "number")
    {
        return "este numar"
    }
    else if (t == "string")
       {
        return "este string"
       } 
       else return "altceva"
}
console.log(tipDate(true));


function primulEl (p)
{
   return p[0]; 
}
const a=[2,6,1,8,3];
console.log (primulEl(a));
//exercitii
function suma (a,b)
{
    return a+b
}
console.log (suma(3,4))

function next (n)
{
    n++;
    return n;
}
console.log(`next number= ${next(4)}`)

function area(b,h)
{
    a=(b*h)/2;
    return a;
}
console.log(area(7,4))

function atoD(y)
{
    d=y*365;
    return d;
}
console.log(atoD(65))

function mtoS(m)
{
    s=m*60;
    return s;
}
console.log(mtoS(5))

function torF (a,b)
{
    if (a+b < 100)
        return true;
    else return false;
}
console.log(torF(224,15))

function impostor(i,p)
{
    f=100*(i/p)
    return f;
}
console.log(`${impostor(1,10)}% impostor`)

function greet(name)
{
    return name;
}
console.log(`hello('${greet('Cezar')}')-' Hi ${greet('Cezar')}'`)

function validare (s1,s2)
{
    if (s1==s2) return true;
    else return false;
}
console.log(validare('Cezar','Cezar'));