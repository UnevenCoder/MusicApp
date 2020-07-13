# Music App Using Sound Cloud Api 

It is a simple music app that fetches songs from sound cloud api and displays em.It uses **Html5 , Css3 , Vanillajs and Bootstrap4** .
You will need to have client_id to run the program to it's full potential :)<br><br>

**How to Contribute ?**
Just open a pr and I will surely look into ... also describe what it is changing and what it is for ... for some ideas pn what to improve are found in the end...

**The app works/runs in 5 steps <br>
=>1 getting the search query<br>
=>2 fetching data from an api with that specific search query<br>
=>3 displaying it [the img and the name]<br>
=>4 Adding to the playlist and letting you play the music <br>
=>5 Saving your playlist to local storage**<br>
<br><br>
**Breakdown of what's happening in each step**<br>

**Step 1 : Getting the Search Query**<br>
   We cannot fecth all the infinite data an api holds .. we fetch data only which the user needs ..<br>
   To get the search query we firstly need some sort of input box ..<br>
   We can use the attribute value of an input element to get the search query when he either presses enter or he clicks on search..<br><br>
   
  <img src='https://cdn.discordapp.com/attachments/708087360721780877/732077474095300658/Screenshot_20200713-0608122.jpeg'>
   <br>
  After we recieve the input and store it in some form of variable we can move ahead with the process<br><br>
  
**Step 2 : Fetching information/data from api**
<br>
To perform this step we need to have client id issued on soundcloud's api's website ... you can make it into an object to easily access the results  <br>
In the project we have defined api as an object and have written fuctions accordingly <br><br>
<img src='https://cdn.discordapp.com/attachments/708087360721780877/732077471448563782/Screenshot_20200713-0625562.jpeg'><br><br>
**Step 3 : Displaying the output** <br><br>
Ueing Foreach or for loop you can  loop through the results and keep creating card objs with obj.tutle and obj.image ... I personally find for loop easier and faster to do and  it has been used in this project:)
<br>
We have a container to which all the cards are written <br>
<img src='https://cdn.discordapp.com/attachments/708087360721780877/732077473822539857/Screenshot_20200713-0618342.jpeg'>
**Step 4 : Adding to playlist and playing**
<br>
When we know what the user wants to hear let's just embed that in the search and add to the playlist and let him/her enjoy the song 

<img src='https://cdn.discordapp.com/attachments/708087360721780877/732077473549778954/Screenshot_20200713-0622492.jpeg'>
<br><br>
**Step 5 : Saving to local storage and more** <br>
we have stored all our inner html in the local storage ... added a delete track button to delete specific track and delete playlist to delete the entire playlist from local storage 
<br><br>
<img src='https://cdn.discordapp.com/attachments/708087360721780877/732077469770842112/Screenshot_20200713-0626092.jpeg'>
<img src='https://cdn.discordapp.com/attachments/708087360721780877/732077469406068756/Screenshot_20200713-0626093.jpeg'>
<hr><br><br>
**Things that can be improved** :<br>
Site can be made responsive <br>
Card height problem can be solved<br>
More buttons and filtering features can be added<br>
