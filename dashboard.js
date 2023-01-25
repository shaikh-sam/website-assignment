




let id="no";
// localStorage.clear();
selectData();

function validateData(name, age, hobby){
    if(name == ""){
        alert("Please enter name")
        return false
    }
    if(age == ""){
        alert("Please enter age")
        return false
    }
    if(isNaN(age)){
        alert("Please enter age in numbers")
        return false
    }
    if(hobby == ""){
        alert("Please enter hobby")
        return false
    }
    return true
}

function addData(){
	document.getElementById('msg').innerHTML="";
	let name=document.getElementById('name').value;
	let age=document.getElementById('age').value;
	let hobby=document.getElementById('hobby').value;

	if(validateData(name, age, hobby)){
		console.log(id);
		if(id=='no'){
			let arr=JSON.parse(localStorage.getItem('table'));
			if(arr==null){
				arr=[]
				let data={name : name, age : age, hobby : hobby};
				arr.push(data)
				localStorage.setItem('table',JSON.stringify(arr));

			}else{
				arr.push({name : name, age : age, hobby : hobby});
				localStorage.setItem('table',JSON.stringify(arr));
			}
		}else{
			let arr=JSON.parse(localStorage.getItem('table'));;
			arr[id]={name : name, age : age, hobby : hobby};
			localStorage.setItem('table',JSON.stringify(arr));

		}
		document.getElementById('name').value='';
		document.getElementById('age').value='';
		document.getElementById('hobby').value='';
		selectData(); 
		document.getElementById("myPopup").style.display = "none";
       
	}else{
        document.getElementById('msg');
	}
}

function selectData(){
	let arr=JSON.parse(localStorage.getItem('table'));
	if(arr!=null){
		let html='';
		for(let k in arr){
			html=html+`<tr><td>${Number(k)+1}</td><td>${arr[k]?.name}</td><td>${arr[k]?.age}</td><td>${arr[k]?.hobby}</td><td><a href="javascript:void(0)" onclick="editData(${k})" class="edit" id="edit${k}" ><img src="icons8-pencil-30.png" alt=""> </a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})" class="del"><img src="icons8-trash-30.png" alt=""></a></td></tr>`;
		}
		document.getElementById('root').innerHTML=html;
		
	}
}

function editData(index){
	id=index;
	let arr=JSON.parse(localStorage.getItem('table'));
	document.getElementById('name').value=arr[index]?.name;
	document.getElementById('age').value=arr[index]?.age;
	document.getElementById('hobby').value=arr[index]?.hobby;
	document.getElementById(`edit${index}`).addEventListener("click", function(){
		document.getElementById("myPopup").style.display = "block";
	  });
}

function deleteData(index){
	let arr=JSON.parse(localStorage.getItem('table'));
	arr.splice(index,1);
	setTableData(arr);
	selectData();
}

function getTableData(){
	let arr=JSON.parse(localStorage.getItem('table'));
	return arr;
}

function setTableData(arr){
	localStorage.setItem('table',JSON.stringify(arr));
}


function logout(){
	window.location.assign("index.html");
}