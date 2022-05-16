var selectedRow = null
// // // // // // // // // // // // // // // // // // 
var obyekt=[];
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())

  .then(json=>{
obyekt=json;

      console.log(obyekt);

for(let i=0;i<obyekt.length;i++){
     var tr=`<tr><td>`+obyekt[i].name+`</td><td>`+obyekt[i].email+`</td><td>`+obyekt[i].phone+
        `</td><td><button onclick="funk(${i});event.preventDefault();onFormSubmit()">add</button></td></tr>`;
        var alik=document.getElementsByClassName('alik')[0].innerHTML+=tr;
}

}
)
var p;
function funk(i){
   p=i;
}
function funk1(){
    document.getElementsByClassName('orqa')[0].style.display="block";
}
function funk2(){
    document.getElementsByClassName('orqa1')[0].style.display="block";
}
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)" ><ion-icon name="pencil-outline" style="color:green" onclick="funk2()"></ion-icon></a>
                       <a onClick="onDelete(this)"><ion-icon name="trash-outline" style="color:red"></ion-icon></a>`;
}
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = document.getElementById("fullName").value;
    selectedRow.cells[1].innerHTML = document.getElementById("empCode").value;
    selectedRow.cells[2].innerHTML = document.getElementById("salary").value;
}

function onDelete(td) {
    if (confirm('Adminlikdan olib tashlaysizmi?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    return isValid;
}
function readFormData() {
    var formData = {};
    formData["fullName"] = obyekt[p].name;
    formData["empCode"] = obyekt[p].email;
    formData["salary"] = obyekt[p].phone;
    return formData;
}