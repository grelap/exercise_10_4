function Telefon(marka, cena, kolor, system) {
   this.marka = marka;
   this.cena = cena;
   this.kolor = kolor;
   this.system = system;
   this.telModel = function (){
      console.log("marka: " + this.marka);
   }
   this.telModel();
}
Telefon.prototype.printInfo = function(){
   console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena +  ", system operacyjny to " + this.system + ".");
}

var SamsungGalaxyS6 = new Telefon("Samsung", 1500, "srebrny", "Android 5.0");
var iPhone6s = new Telefon("Apple", 2250, "srebrny", "iOS");
var OnePlusOne = new Telefon("OnePlus", 1500, "srebrny", "android 5.0");


SamsungGalaxyS6.printInfo();
iPhone6s.printInfo();
OnePlusOne.printInfo();
