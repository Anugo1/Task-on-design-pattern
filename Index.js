class Telephone{
    constructor(){
        this.observers = new set();
        this.phonebook = new set();
    }

    addphonenumber(phonenumber){
        this.addphonenumber.add(number);
    }

    removephonemumber(phonenumber){
        this.removephonemumber.delete(phonenumber);
    }

    dailphonemumber(phonenumber){
        this.dailphonemumber.notify(phonenumber);
    }


    add(observer){
        this.observers.add(observer)
    }

    remove(observer){
        this.observers.delete(observer)
    }

    notify(contact){
        for (let observer of this.observers){
            observer.update(context)
        }
    }
}


class observer {
   constructor(){
   
   } 

   update(){

   }
}


