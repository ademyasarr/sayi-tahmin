
var rsayi,sayac,hak=3;
var baslat=document.querySelector("#baslat");
var tahmin=document.querySelector("#tahmin");
var sayi=document.querySelector("#sayi");

baslat.onclick=function()
{
    tahmin.disabled=false;
    rsayi= Math.round(Math.random() * 10);
    sayac=0;
    
}

tahmin.onclick=function()
{
    sayac++;
if(rsayi != sayi.value && sayac>=hak) {
    window.alert("üzgünüz ! hakkınız sona erdi");
    tahmin.disabled=true;
}

if(rsayi==sayi.value)
{
    window.alert("Tebrikler! Kazandınız..");

}else if (sayi.value > rsayi) 
{
    window.alert("Daha küçük sayı giriniz");

}else 
{
    window.alert("Daha büyük sayı giriniz");
   }
}