function answer(){
    const username=document.getElementById("username").value
    const salary=document.getElementById("salary").value
    const cibil=document.getElementById("cibil").value

    if(cibil>800 && salary>50000){
        msg= username+" you are eligible for 30lakhs"
    }
    else if(cibil>600 && salary>30000){
        msg= username+" you are eligible for 20lakhs"
    }
    else if(cibil>400 && salary>10000){
        msg= username+" you are eligible for 10lakhs"
    }
    else{
        msg=username+" not eligible"
    }
    const status= document.getElementById("status")
    status.textContent=msg
    
}