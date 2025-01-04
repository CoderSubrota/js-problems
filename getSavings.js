function monthlySaving(payments,livingCoast){
if(isNaN(livingCoast) || !Array.isArray(payments)){
    return console.log("invalid input") ;
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
    return console.log(savings) ;
  }else{
    return console.log("earn more")
  }
}


monthlySaving([900,2700,3400],10000) ;

