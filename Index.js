class Telephone{
    constructor(){
        this.observers = new Set();
        this.phonecaller = new Set();
    }

    addphonenumber(phonenumber){
        this.phonecaller.add(phonenumber);
    }

    removephonemumber(phonenumber){
        this.phonecaller.delete(phonenumber);
    }

    dailphonemumber(phonenumber){
        if (this.phonecaller.has(phonenumber)) {
            this.notify(`${phonenumber} is dailing ............\n`);
        }else{
            this.notify(`${phonenumber} is not found ,try again later\n`)
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

   update(context){
    console.log(`${this.name}: ${context}`)
   }
}



//initializing:
const telephone = new Telephone();

// Two observers to be added to the observer class:
const Anugo = new observer('Anugo');
const mike = new observer('Mike');

let myNumber = 23407023232
let dey_play = 2340904532

telephone.addphonenumber(myNumber)

telephone.add(Anugo)
telephone.dailphonemumber(myNumber)

telephone.add(mike)

<<<<<<< HEAD
telephone.dailphonemumber(dey_play)
=======
telephone.addObserver(Anugo)
telephone.addObserver(mike)
>>>>>>> 2c978273ad31e2ccac4853755c933fe14b6ab8ad
