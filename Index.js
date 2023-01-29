class Telephone{
    constructor(){
        this.observers = new set();
        this.phonebook = new set();
    }

    addphonenumber(phonenumber){
        this.addphonenumber.add(phonenumber);
    }

    removephonemumber(phonenumber){
        this.removephonemumber.delete(phonenumber);
    }

    dailphonemumber(phonenumber){
        if (this.phonebook.has(phonenumber)) {
            this.notify(`${phonenumber} is dailing ............`)
        }
    }


    add(observer){
        this.observers.add(observer)
    }

    remove(observer){
        this.observers.delete(observer)
    }

    notify(context){
        for (let observer of this.observers){
            observer.update(context)
        }
    }
}


class observer {
   constructor(name){
   this.name = name 
   } 

   update(){

   }
}


const telephone = new Telephone();

// Two observers:
const Anugo = new observer()
const mike = new observer()



telephone.addphonenumber()
