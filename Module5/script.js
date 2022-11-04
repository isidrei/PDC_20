//Object
let car = {
    Brand : "Toyota",
    Variant: "Wigo",
    Transmission: "Automatic",
    Lights: {
        Front:"LED",
        Rear: "LED/Blub",
        Signal: "Bulb"
    },

    displayBrand(){
        alert(this.Brand);
       
    }

}

//Template
class myCar {
    constructor (brand, variant, transmission){
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}