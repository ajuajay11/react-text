const newDiv = document.getElementById("newDiv");
const selectOption = document.getElementById("selectOption");
const addOption = document.getElementById("addOption");
const saveSegment = document.getElementById('save_segment');
const segmentName = document.getElementById('segment-name');


saveSegment.addEventListener('click',() => {
var resultSegment = document.querySelectorAll('#newDiv div select');
console.log(resultSegment[0].value);
var text = resultSegment[0].options[resultSegment[0].selectedIndex].text;
let schema=[];
console.log(text);
resultSegment.forEach((result)=>{

  // var output = {
  //   "segment_name": "last_10_days_blog_visits",
  //   "schema": [
  //   {"first_name": "First name"},
  //   {"last_name": "Last name"}
  //   ]};

schema.push(`${result.value} : ${result.options[result.selectedIndex].text}`);
setTimeout(() => {
  window.alert("submitted successfully")
  result.value = "";
 segmentName.value="";
}, 700);

});
console.log(schema);

var outputSchema={
  "segment_name": segmentName.value,
  "schema": schema,}
  console.log(outputSchema);

  // "post"
  var http = new XMLHttpRequest();
var url = 'https://webhook.site/9f88bbe8-dbe9-41fc-8d00-85251fbd9a8c';
var params = outputSchema;
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(JSON.stringify(params));

  // fetch("https://webhook.site/9f88bbe8-dbe9-41fc-8d00-85251fbd9a8c", {

  // method: 'POST',
  // body: JSON.stringify({
  //   body: outputSchema,
  // }),
  // headers: {
  //   'Content-type': 'application/json; charset=UTF-8',
  // }
  // })

  // .then(function(response){ 
  // return response.json()})

  // .then(function(data)
  // {
  //   console.log(data)
  // })
  // .catch(error => console.error('Error:', error))

});


addOption.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedValue = selectOption.value;
  if (!selectedValue) {
    return;
  }

  const innerDiv = document.createElement('div');
  const newSelect = document.createElement("select");
  const innerBtn = document.createElement('button');
  innerBtn.classList.add("button-line")
  // innerBtn.innerHTML= "-";
  innerBtn.innerHTML = "<i id='icons' class='fa fa-arrows-h' aria-hidden='true'></i>";

  innerBtn.classList.add('delete');

  innerDiv.appendChild(newSelect);
  innerDiv.appendChild(innerBtn);

  const options = [
    { value: "first_name", text: "First Name" },
    { value: "last_name", text: "Last Name" },
    { value: "gender", text: "Gender" },
    { value: "age", text: "Age" },
    { value: "account_name", text: "Account Name" },
    { value: "city", text: "City" },  
    { value: "state", text: "State" },
  ];
  var disableOpt = document.getElementById(selectedValue);
  disableOpt.setAttribute('disabled', true);
  options.forEach((option) => {
    
      const opt = document.createElement("option");
      opt.value = option.value;
      opt.text = option.text;
      if (selectedValue == option.value) {
        opt.selected='selected';
      }
      newSelect.appendChild(opt);
  });
 
  newDiv.appendChild(innerDiv);
  selectOption.value = "";
  
var deleteBtns = document.querySelectorAll('.delete');
deleteBtns.forEach((deleteButton)=>{
deleteButton.addEventListener("click",(event)=>{
deleteButton.parentElement.remove();
});


});

});



//popup 
var hero =document.querySelector(".hero");
const button = document.querySelector('#slide-button');
const element = document.querySelector('#slide-element');

button.addEventListener('click', function() {
  if(element.className != "show-element"){
    element.classList.remove('hide-element');
    element.classList.add('show-element');
    hero.classList.add("layer");
    // element.classList.add('show-element');
  }
  // if(element.className == "hide-element"){
    
  // }
});


//cancel button

const cancel = document.querySelector("#cancel");

cancel.addEventListener('click', ()=>{
  setTimeout(() => {
    element.classList.remove('show-element');
    segmentName.value="";
    newDiv.innerHTML="";
    hero.classList.remove("layer");
  }, 1000);

  element.classList.add('hide-element');
  

})