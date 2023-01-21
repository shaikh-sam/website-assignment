





let id="no";
localStorage.clear();
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
			let arr=getCrudData();
			if(arr==null){
				let data=[{name : name, age : age, hobby : hobby}];
				setCrudData(data);
			}else{
				arr.push({name : name, age : age, hobby : hobby});
				setCrudData(arr);
			}
			document.getElementById('msg').innerHTML='Data added';
		}else{
			let arr=getCrudData();
			arr[id]={name : name, age : age, hobby : hobby};
			setCrudData(arr);
			document.getElementById('msg').innerHTML='Data updated';
		}
		document.getElementById('name').value='';
		document.getElementById('age').value='';
		document.getElementById('hobby').value='';
		selectData();        
	}else{
        document.getElementById('msg').innerHTML='Please enter your name';
	}
}

function selectData(){
	let arr=getCrudData();
	if(arr!=null){
		let html='';
		for(let k in arr){
			html=html+`<tr><td>${Number(k)+1}</td><td>${arr[k]?.name}</td><td>${arr[k]?.age}</td><td>${arr[k]?.hobby}</td><td><a href="javascript:void(0)" onclick="editData(${k})" class="edit" > Edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;
		}
		document.getElementById('root').innerHTML=html;
		
	}
}

function editData(rid){
	id=rid;
	let arr=getCrudData();
	document.getElementById('name').value=arr[rid]?.name;
	document.getElementById('age').value=arr[rid]?.age;
	document.getElementById('hobby').value=arr[rid]?.hobby;
}

function deleteData(rid){
	let arr=getCrudData();
	arr.splice(rid,1);
	setCrudData(arr);
	selectData();
}

function getCrudData(){
	let arr=JSON.parse(localStorage.getItem('crud'));
	return arr;
}

function setCrudData(arr){
	localStorage.setItem('crud',JSON.stringify(arr));
}

