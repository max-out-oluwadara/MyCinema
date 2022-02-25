
function regStaff() {
    var allusers;

    if (!localStorage.getItem("allstaffs")) {
        allusers=[];
    } else {
        let getparse=localStorage.getItem("allstaffs");
        allusers=JSON.parse(getparse);
    }
    var user={};
    user.email= email.value;
    user.firstname= firstName.value;
    user.lastname= lastName.value;
    user.password= pass.value;
    allusers.push(user);
    localStorage.setItem("allstaffs",JSON.stringify(allusers));
    location.reload();
}
 


function loadStaffList() {
    let getStafflocal=localStorage.getItem("allstaffs");
    let convStafflocal= JSON.parse(getStafflocal);
    for (let i = 0; i < convStafflocal.length; i++) {
        
        staffList.innerHTML+=`
        <tr>
                  <td>${i+1}</td>
                  <td>${convStafflocal[i].email}</td>
                  <td>${convStafflocal[i].firstname}</td>
                  <td>${convStafflocal[i].lastname}</td>
                  <td>${convStafflocal[i].password}</td>
                  
                    <td>
                    <i class="far fa-edit btn btn-success" data-toggle="modal" data-target="#addUserModal0" onclick="editStaff(${i})"> Edit</i> 
                    <i class="fas fa-trash-alt btn btn-danger " onclick="delStaff(${i})">Delete</i> 
                    </td>
                </tr>
        `
        numStaff.innerHTML=i+1;
    }
}
loadStaffList();


function delStaff(del) {
    let getStafflocal=localStorage.getItem("allstaffs");
    let convStafflocal= JSON.parse(getStafflocal);
    convStafflocal.splice(del,1);
    if (confirm('Are you sure ?')) {
    localStorage.setItem("allstaffs",JSON.stringify(convStafflocal))
    }
    location.reload();
}


setChairs=()=>{
    localStorage.setItem("chairs", totalChairs.value)
    loadchair();
}

editStaff=(popForm)=>{
    editBtnShow.innerHTML=`<button onclick="saveStaff(${popForm})" class="btn btn-primary" data-dismiss="modal">Save changes</button>`;
    let getStafflocal=localStorage.getItem("allstaffs");
    let convStafflocal= JSON.parse(getStafflocal);
    email.value=convStafflocal[popForm].email;
   firstName.value=convStafflocal[popForm].firstname;
    lastName.value=convStafflocal[popForm].lastname;
    pass.value=convStafflocal[popForm].password;

}

const saveStaff=(saveEdit)=>{
    let getStafflocal=localStorage.getItem("allstaffs");
    let convStafflocal= JSON.parse(getStafflocal);
   convStafflocal[saveEdit].email=email.value;
   convStafflocal[saveEdit].firstname=firstName.value;
    convStafflocal[saveEdit].lastname=lastName.value;
    convStafflocal[saveEdit].password=pass.value;
    localStorage.setItem("allstaffs",JSON.stringify(convStafflocal));
    location.reload();
}


loadchair=()=>{
let localchairs=localStorage.getItem('chairs')
disChair.innerHTML =localchairs;
}
loadchair();