let container=document.getElementById('result');
let sidebar=document.getElementById('sidebar');
let urls=[]
let key = prompt('please enter client_id')
if(key ==='')alert('you have not entered id ... please reload and enter to use the program to it\'s full potential ');
function val(){
  
  urls=[]
  //sidebar.innerHTML=''
  container.innerHTML=''
var inputVal = document.getElementById("inputVal").value;
api.init(key);
api.tracks(inputVal);
}
let a = document.getElementById('inputVal')
a.addEventListener('keyup',function(e){if(e.which=='13')val()});

//-----------------------------*/

//for(let i =0;i<5;i++){
//  container.innerHTML+=card;
//}
let api={}
  api.init=function(input){SC.initialize({
  client_id:input
});
}
api.tracks=function (input){
SC.get('/tracks', {
  q: input
}).then(function(tracks) {
  for(let i = 0 ; i < tracks.length ;i++){
    container.innerHTML+=('<div class="col-md-6 mt-5 ml-0" id="cardio"><div class="card '+i+'"><img class="card-img-top" src="'+tracks[i].artwork_url+'" alt="Sadly Artwork for this track isn\'t available ..:(" style="width:100%;height:100%;"><div class="card-body"> <h5 class="card-title">'+tracks[i].title+'</h5><p class="card-text"> <br> License :'+ tracks[i].license +'</p><a href="#" class="btn btn-primary" onclick="changeClass('+i+')">Add to Playlist</a> </div></div></div>');
    urls.push(tracks[i].permalink_url)
  console.log(tracks)
  }})}
//-------------------------play and move------------
function changeClass(i){
let track_url=urls[i]
SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
  //console.log(oEmbed.html)
  let embed='<div id='+i+' class="mt-6 col-md-4" style="width:100%;height:200px;"><iframe scrolling="no" frameborder="no" src="'+track_url+'"&show_artwork=true&auto_play=true"></iframe><a class=\'btn btn-outline-dark\'id="'+i+'d" onclick = "Remov('+i+',this.id)">Delete</a></div>'
  sidebar.innerHTML+= embed;
  localStorage.setItem('key',sidebar.innerHTML);
});}
sidebar.innerHTML= localStorage.getItem('key')

function Clear(){
  localStorage.clear()
  sidebar.innerHTML=''
}
function Remov(divId,el){
  let a = document.getElementById(divId);
  a.classList.add('hide')
  console.log(document.getElementById(el))
localStorage.setItem('key',sidebar.innerHTML)}
