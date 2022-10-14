function msg() {
alert ('low poh my sun and moon angel baby');
}


// function
function showmsg(match1, match2) {
    alert (match1 + ':'+ match2);

}
//function with parameter
function compute(value1, value2, value3) {
    alert (value1 + value2 + value3);
}
// function with local variables
function showmsg() {
    let message = "low poh";

   alert (message);
}

// Outer variables
let h = "Hello";

function msg2(){
    alert (h + ' World');
}

    //Boolean value
    function compare(){
 let comp = 5 > 1;
   alert (comp);
    }

    // prompt

    function age_checked(){
        let age = prompt (" How old are you?", 1);
        alert (`You are ${age} year/s old`);
        
    }

    //confirm

     function test_confirm(){
         let val  = confirm("Are you sure you want to proceed?");
         alert(val);
     }
    
    // if statements
     function condition(){
         let pass = prompt('Please enter password', '');
        
          if(pass==1234) alert('You are right');
          else alert ("bobo mo beh");
        
      }

    // if else statement

     function login () {
    let pass = prompt ("Please enter your password", '');

        if(pass==1234){
         alert ('login successful');
      }else{
            alert ('Incorrect Password!');

     }
     }

