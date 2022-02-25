function regCustomer() {
    var allUsers;

    if (!localStorage.getItem("allcustomers")) {
        allUsers=[];
    } else {
        let getparse=localStorage.getItem("allcustomers")
        allUsers=JSON.parse(getparse)
    }
    if(emaill.value ==''){
        document.getElementById('emaill');
        eMess.innerHTML='Enter email'
    }
    else {
    var user={};
    user.email= emaill.value;
    user.firstname= firstNamee.value;
    user.lastname= lastNamee.value;
    user.password= passs.value;

    allUsers.push(user);
    localStorage.setItem("allcustomers",JSON.stringify(allUsers))
    
    location.reload();  
}

}


function loadCustomerList() {
    let getCustomerlocal=localStorage.getItem("allcustomers");
    let convCustomerlocal= JSON.parse(getCustomerlocal);
    for (let i = 0; i < convCustomerlocal.length; i++) {
        
        customerList.innerHTML+=`
        <tr>
                  <td>${i+1}</td>
                  <td>${convCustomerlocal[i].email}</td>
                  <td>${convCustomerlocal[i].firstname}</td>
                  <td>${convCustomerlocal[i].lastname}</td>
                  <td>${convCustomerlocal[i].password}</td>
                  
                    <td>
                    <i class="far fa-edit btn btn-success" data-toggle="modal" data-target="#addUserModal1" onclick="editCustomer(${i})"> Edit</i> 
                    <i class="fas fa-trash-alt btn btn-danger " onclick="delCustomer(${i})"> Delete</i> 
                    </td>
                </tr>
        `
        numCust.innerHTML=i+1;
    }
    
}
loadCustomerList();


function delCustomer(del) {
    let getCustomerlocal=localStorage.getItem("allcustomers");
    let convCustomerlocal= JSON.parse(getCustomerlocal);
    convCustomerlocal.splice(del,1);
    if (confirm('Are you sure ?')) {
    localStorage.setItem("allcustomers",JSON.stringify(convCustomerlocal))
    }
    location.reload();
}

editCustomer=(popForm)=>{
    editBtnShow2.innerHTML=`<button onclick="saveCustomer(${popForm})" class="btn btn-success" data-dismiss="modal">Save changes</button>`;
    let getCustomerlocal=localStorage.getItem("allcustomers");
    let convCustomerlocal= JSON.parse(getCustomerlocal);
    emaill.value=convCustomerlocal[popForm].email;
   firstNamee.value=convCustomerlocal[popForm].firstname;
    lastNamee.value=convCustomerlocal[popForm].lastname;
    passs.value=convCustomerlocal[popForm].password;
}

const saveCustomer=(saveEdit)=>{
    let getCustomerlocal=localStorage.getItem("allcustomers");
    let convCustomerlocal= JSON.parse(getCustomerlocal);
   convCustomerlocal[saveEdit].email=emaill.value;
   convCustomerlocal[saveEdit].firstname=firstNamee.value;
    convCustomerlocal[saveEdit].lastname=lastNamee.value;
    convCustomerlocal[saveEdit].password=passs.value;
    localStorage.setItem("allcustomers",JSON.stringify(convCustomerlocal));
    location.reload();
}