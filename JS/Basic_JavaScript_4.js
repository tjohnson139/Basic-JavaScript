function myDictionary() {
    var car_types = {
        Ford:"F150",
        Nissan:"Altima",
        Mazda:"Mazda 6",
        Subaru:"Outback",
        Ford:"Taurus",
    }
    delete car_types.Ford;
    document.getElementById("Dictionary").innerHTML = car_types.Ford;
}