function monthlySaving(payments,livingCoast){
if(isNaN(livingCoast) || !Array.isArray(payments)){
    return "invalid input" ;
}
 let sumOfPayments=0;
  for(let i=0; i<payments.length; i++){
     if(payments[i] >= 3000){
        let tax = (payments[i]/100)*20;
        let withTax=payments[i]-tax;
        sumOfPayments+=withTax;
     }else{
        sumOfPayments+=payments[i];
      }
  }
 
  let savings=sumOfPayments-livingCoast;

  if(savings>=0){
    return savings ;
  }else{
    return "earn more";
  }
}

const result = monthlySaving([900,2700,3400],10000) ;
console.log(result) ;

