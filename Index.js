class Telephone{
    constructor(){
        this.observer = new set();
        this.phonecaller = new set();
    }

    addphonenumber(phonenumber){
        this.phonecaller.add(phonenumber);
    }

    removephonemumber(phonenumber){
        this.phonecaller.delete(phonenumber);
    }

    dailphonemumber(phonenumber){
        if (this.phonecaller.has(phonenumber)) {
            this.notify(`${phonenumber} is dailing ............`);
        }else{
            this.notify(`${phonenumber} is not found ,try again later`)
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



telephone.addphonenumber(23407023232)

telephone.dailphonemumber(23407023232)

telephone.addObserver(Anugo)
telephone.addObserver(mike)