var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let arrayOfKeysAndValues = JSON.parse(localStorage.getItem('userInfo')) || [];
let currentUser = JSON.parse(localStorage.getItem("current-user"));
let obj = {};


// console.log(arrayOfKeysAndValues);

// function setValueforName() {
//     obj = {}
//     let valueForName = document.getElementById("my-username").value;
//     if (/\d/.test(valueForName)) {
//         document.getElementById("username-warining").style.display = 'block';
//         document.getElementById("username-accept").style.display = 'none';

//     } else if (valueForName.match(format) || (valueForName.length <= 0)) {
//         document.getElementById("username-warining").style.display = 'block';
//         document.getElementById("username-accept").style.display = 'none';

//     } else {
//         document.getElementById("username-accept").style.display = 'block';
//         document.getElementById("username-warining").style.display = 'none';
//         obj['firstName'] = valueForName;
//         console.log(obj); 
//     }

// }

// function setValueforLastName() {
//     let valueForLastName = document.getElementById("my-username-last").value;
//     if (/\d/.test(valueForLastName)) {
//         document.getElementById("last-warining").style.display = 'block';
//         document.getElementById("last-accept").style.display = 'none';

//     } else if (valueForLastName.match(format) || (valueForLastName.length <= 0)) {
//         document.getElementById("last-warining").style.display = 'block';
//         document.getElementById("last-accept").style.display = 'none';

//     } else {
//         document.getElementById("last-accept").style.display = 'block';
//         document.getElementById("last-warining").style.display = 'none';
//         obj['lastName'] = valueForLastName;
//         console.log(obj); 
//     }
// }

// let checkEmailtoStorage = false;

// function setValueforEmail() {
//     let valueForEmail = document.getElementById("my-email").value;

//     let checkEmailinStorage = true;
//     arrayOfKeysAndValues.forEach(function(element){
//         if(element.email !=  valueForEmail){

//         }
//         else {
//             alert("Your email is repeated")
//             checkEmailinStorage = false;
//         }
//     })

//     if (valueForEmail.match(/\w+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/)) {
//         if (checkEmailinStorage) {
//             document.getElementById("email-accept").style.display = 'block';
//             document.getElementById("email-warining").style.display = 'none';
//             document.getElementById("email-repeat").style.display = 'none';
//             checkEmailtoStorage = true;
//         }
//         else {
//             document.getElementById("email-repeat").value=''
//             document.getElementById("email-repeat").style.display = 'block'
//             document.getElementById("email-accept").style.display = 'none';
//             document.getElementById("email-warining").style.display = 'none';
//             checkEmailtoStorage = false;
//         }   
//     }else {
//         document.getElementById("email-warining").style.display = 'block';
//         document.getElementById("email-accept").style.display = 'none';
//         document.getElementById("email-repeat").style.display = 'none';
//         checkEmailtoStorage = false;
//     }   
// }


// function setValueforReEmail(){
//     let valueForReEmail = document.getElementById("re-my-email").value;

//     if ( valueForReEmail == document.getElementById("my-email").value) {
//         document.getElementById("reemail-accept").style.display = 'block';
//         document.getElementById("reemail-warining").style.display = 'none';
//         obj['email'] = valueForReEmail
//         console.log(obj)
//     }else {
//         document.getElementById("reemail-accept").style.display = 'none';
//         document.getElementById("reemail-warining").style.display = 'block';
//     }
// }

// var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

// let checkPasstoStorage = false;

// function setValueforPassword() {
//     let valueForPassword = document.getElementById("my-password").value;

//     if (valueForPassword.length >= 8 && valueForPassword.match(passw) && valueForPassword.match(format)){
//         document.getElementById("password-warining").style.display = 'none';
//         document.getElementById("password-accept").style.display = 'block';
//         checkPasstoStorage = true;
        
//     } else {
//         document.getElementById("password-warining").style.display = 'block';
//         document.getElementById("password-accept").style.display = 'none';
//         checkPasstoStorage = false;
//     }
    
// }


// function setValueforRePassword() {
//     let valueForRePassword = document.getElementById("re-my-password").value;

//     if (valueForRePassword == document.getElementById("my-password").value) {
//         document.getElementById("repassword-warining").style.display = 'none';
//         document.getElementById("repassword-accept").style.display = 'block';
//         obj['password'] = valueForRePassword
//         console.log(obj)
//     } else {
//         document.getElementById("repassword-warining").style.display = 'block';
//         document.getElementById("repassword-accept").style.display = 'none';
//     }
// }



// function setValueforNumber() {
//     let valueForNumber = document.getElementById("my-number").value;
    
//     if (valueForNumber.match(/\d{10}/)) {
//         document.getElementById("number-warining").style.display = 'none';
//         document.getElementById("number-accept").style.display = 'block';
//         obj['number'] = valueForNumber
//         console.log(obj) 
//     }
//     else{
//         document.getElementById("number-warining").style.display = 'block';
//         document.getElementById("number-accept").style.display = 'none';
//     }
    
// }

// let formEvent = document.getElementById("btn")


      
// formEvent.onclick = function (event) {

//     arrayOfKeysAndValues.push(obj)
//     event.preventDefault()

//     let checkFirstName = document.getElementById("my-username").value;
//     let checkLastName = document.getElementById("my-username-last").value;
//     let checkEmail = document.getElementById("my-email").value;
//     let checkPassword = document.getElementById("my-password").value;
//     let checkMobile = document.getElementById("my-number").value;

//     if (arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].firstName != undefined && 
//         arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].lastName != undefined && 
//         arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].email != undefined && 
//         arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].password != undefined && 
//         arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].number != undefined &&  
//         checkFirstName == arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].firstName && 
//         checkLastName == arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].lastName && 
//         checkEmail == arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].email && 
//         checkPassword == arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].password && 
//         checkMobile == arrayOfKeysAndValues[arrayOfKeysAndValues.length - 1].number && checkPasstoStorage && checkEmailtoStorage){

//         window.localStorage.setItem(`userInfo` , JSON.stringify(arrayOfKeysAndValues))

//     }else {
//         alert(`You are missed at least one of required information to register. Please check your information again`);
//         event.preventDefault()
//     }
// }


// localStorage.clear()

let objectUser = {}

let formLogInEvent = document.getElementById("btn-log")

formLogInEvent.onclick = function (event) {

    let valueFromEmailLog = document.getElementById("login-email").value
    let valueFromPasswordLog = document.getElementById("login-password").value

    for ( i=0 ; i<arrayOfKeysAndValues.length ; i++ ){
        if (valueFromEmailLog == arrayOfKeysAndValues[i].email){
            document.getElementById("login-email-accept").style.display = 'block';
            document.getElementById("login-email-warining").style.display = 'none' ;

            if (valueFromPasswordLog == arrayOfKeysAndValues[i].password) {
                document.getElementById("login-password-accept").style.display = 'block'
                document.getElementById("login-password-warining").style.display = 'none'
                objectUser = arrayOfKeysAndValues[i];
                localStorage.setItem('current-user', JSON.stringify(objectUser))
                let x = true;
                console.log(x);
                if ( x == true){
                    window.location.href = "./profile.html"
                }
                
            }
            else {
                document.getElementById("login-password-warining").style.display = 'block' 
                event.preventDefault()
            }
        } else {
            document.getElementById("login-password-warining").style.display = 'block' 
            document.getElementById("login-password-accept").style.display = 'none'
            document.getElementById("login-email-warining").style.display = 'block'
            document.getElementById("login-email-accept").style.display = 'none'
            console.log(false);
            event.preventDefault()

        }
    }





    // let storageEmail = checkEmailAndIndex(arrayOfKeysAndValues);

    // function checkEmailAndIndex(arr){
    //     let testArrayEmail = arr.map(function (key, index){
    //         if (key.email == valueFromEmailLog){
    //             emailIndexForPass = index;
    //            return emailIndexForPass
    //         }    
    //     })
    //     return testArrayEmail
    // }

    // console.log(storageEmail);
    
    // let toChangeEmailinJSON = JSON.stringify(storageEmail)
    // console.log(toChangeEmailinJSON.match(valueFromEmailLog));

    // if (toChangeEmailinJSON.match(valueFromEmailLog) && valueFromEmailLog !==""){
    //     document.getElementById("login-email-accept").style.display = 'block'
    //     document.getElementById("login-email-warining").style.display = 'none'  
    // }else {
    //     document.getElementById("login-email-accept").style.display = 'none'
    //     document.getElementById("login-email-warining").style.display = 'block'
    //     event.preventDefault() 
    // }

    // let toChangePasswordinJSON = arrayOfKeysAndValues[emailIndexForPass].password


    // if (toChangePasswordinJSON == valueFromPasswordLog){
    //     document.getElementById("login-password-accept").style.display = 'block'
    //     document.getElementById("login-password-warining").style.display = 'none'     
    // } else {
    //     document.getElementById("login-password-accept").style.display = 'none'
    //     document.getElementById("login-password-warining").style.display = 'block'  
    //     event.preventDefault()
    // }

}

// localStorage.clear()



// let xObj = [
//     {
//         id : 3,
//         name : "ali",
//         age : 15
//     },
//     {
//         id : 2,
//         name : "aliii",
//         age : 25
//     },
//     {
//         id : 1,
//         name : "aliiiii",
//         age : 35
//     }
// ]

// let yObj = {
//         id : 1,
//         name : "Mohammed",
//         age : 55
// }

