const PRI = a => _ => a
console.log(PRI(2)(1));

const ULT = _ => b => b

console.log(ULT(2)(1));

const TRO = f => a => b => f(b)(a)

console.log(TRO(PRI)(5)(10));

const T = PRI
const F = ULT

 

console.log(FALSE(ULT)(10)(20));



const NOT = a => a(F)(T)

const AND = a => b => a(b)(T) 

const OR = a = b => a(T)(b) 


// Alguns Calculus 