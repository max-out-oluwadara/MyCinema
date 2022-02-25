

signUp=()=>{
    
    if (exampleRadios1.checked)
    if(localStorage.allstaffs)
    {
        var allUsers;
        allUsers=JSON.parse(localStorage.allstaffs)
        let user = {
            email:"",
            firstname:"",
            lastname:"",
            password:""
        };
        user.email=email.value;
        user.firstname=firstName.value;
        user.lastname=lastName.value;
        user.password=pass.value;
        allUsers.push(user);
        localStorage.setItem('allstaffs',JSON.stringify(allUsers));
        alert(" Staff Registration Successful!!!")
        
    } else {
        var allUsers=[];
        let user = {
            email:"",
            firstname:"",
            lastname:"",
            password:""
        };
        user.email=email.value;
        user.firstname=firstName.value;
        user.lastname=lastName.value;
        user.password=pass.value;
        allUsers.push(user);
        localStorage.setItem('allstaffs',JSON.stringify(allUsers));
        alert(" Staff Registration Successful!!!")
        
    }
    else if (exampleRadios2.checked ) 
    if(localStorage.allcustomers) {
        var allUsers;
        allUsers=JSON.parse(localStorage.allcustomers)
        let user = {
            email:"",
            firstname:"",
            lastname:"",
            password:""
        };
        user.email=email.value;
        user.firstname=firstName.value;
        user.lastname=lastName.value;
        user.password=pass.value;
        allUsers.push(user);
        localStorage.setItem('allcustomers',JSON.stringify(allUsers));
        alert(" Customer Registration Successful!!!")
        
    } 
    else {
        var allUsers=[];
        let user = {
            email:"",
            firstname:"",
            lastname:"",
            password:""
        };
        user.email=email.value;
        user.firstname=firstName.value;
        user.lastname=lastName.value;
        user.password=pass.value;
        allUsers.push(user);
        localStorage.setItem('allcustomers',JSON.stringify(allUsers));
        alert(" Customer Registration Successful!!!")
        
    }

}

