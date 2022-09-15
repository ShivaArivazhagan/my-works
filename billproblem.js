bills=[{'a':2000,'b':200,'c':1000},{'a':1500,'b':0,'c':0,'d':1300}, {'b':1000,'d':0}]
// .........................find average........................
function findBillAverage(input){
averageValue=[]
 for(i=0;i<input.length;i++){
    sum=0
    count=0
    average=0
    for(j in input[i]){
        sum+=input[i][j]
        count++
        average=sum/count
    }
    averageValue.push(average) 
 }return averageValue
}findBillAverage(bills)

// .........................find people.........................
function findPoeple(input){
  people=[]
  for(i=0;i<input.length;i++){
    for(j in input[i]){
       if(!people.includes(j)){
          people.push(j)
       }
    }
  }return people;
}findPoeple(bills)

// .............................each contribution...............
function eachContribution(input){
remainAmount=[]
for(i=0;i<input.length;i++){
    billAverage={}
    for(j in input[i]){   
      billAverage[j]=input[i][j]-averageValue[i]
    }
    remainAmount.push(billAverage)
}
return remainAmount
}eachContribution(bills)

// ........................... each person - total amount ......................
function totalAmountOfPersons(remainAmount){
person=people
finalSettelement={}
for(i=0;i<person.length;i++){
    total=0
    for(j=0;j<remainAmount.length;j++){ 
       for(k in remainAmount[j]){
        if(k==person[i]){
            total+=remainAmount[j][k]
           }  
        }   
    }
    finalSettelement[person[i]]=total 
} 
return finalSettelement
}totalAmountOfPersons(remainAmount) 

// .........................split pay & get.....................
function splitPayerGeter(finalSettelement){
geter={}
payer={}
for(i in finalSettelement){
    if(finalSettelement[i]>0){ 
        payer[i]=finalSettelement[i]
    }else{
        geter[i]=finalSettelement[i]
    }
}
return geter,payer;
}splitPayerGeter(finalSettelement)

// ......sorting................................................
function sorting(a,b){return b-a}

// ...........sortingting and spliting..........................
function sortedAmount(geter,payer){
geterSort=[]
finalGeter={}
payerSort=[]
finalPayer={}
for(i in geter){
    geterSort.push(geter[i])
}
geterSort=geterSort.sort(sorting).reverse()
for(j of geterSort){
    for(k in geter){
        if(j==geter[k]){
            finalGeter[k]=geter[k]
        }
    }  
}
for(i in payer){
    payerSort.push(payer[i])
}
payerSort=payerSort.sort(sorting)
for(j of payerSort){
    for(k in payer){
        if(j==payer[k]){
            finalPayer[k]=payer[k]
        }
    }  
}
return finalGeter,finalPayer;
}sortedAmount(geter,payer)

// ...............final settelement.............................
function settelement(finalGeter,finalPayer){
    for(i in finalPayer){
        for(j in finalGeter){
            if(finalPayer[i]!=0 && finalGeter[j]!=0){
                if(finalPayer[i]>Math.abs(finalGeter[j])){
                        console.log(`${j} pay ${Math.abs(Math.round(finalGeter[j]))} to:${i}`);
                        re=payer[i]-Math.abs(finalGeter[j])
                        finalGeter[j]=0
                        finalPayer[i]=re
    
                    }else if(finalPayer[i]<Math.abs(finalGeter[j])){
                        console.log(`${j} pay ${Math.abs(Math.round(finalPayer[i]))} to: ${i}`);
                        re=payer[i]-Math.abs(finalGeter[j])
                        finalPayer[i]=0
                        finalGeter[j]=re         
                    } else if(finalPayer[i]==Math.abs(finalGeter[j])){
                        console.log(`${j} pay ${Math.abs(Math.round(finalGeter[j]))} to: ${i}`);
                        finalPayer[i]=0  
                        finalGeter[j]=0
                        
                    } 
                }
        }
    }
}settelement(finalGeter,finalPayer)
