const home=document.querySelector('.home');
const hdcross=document.querySelector('#hdcross');
const searchicon1=document.querySelector('#searchicon1');//main magnify normal in header
//const srchicon1=document.querySelector('#srchicon1');// inside magnifying glass 
const search1=document.querySelector('#searchinput1');//serach box
/*event shld be done on magnify glass and it shld activate on click
after clicking function() shld execute
in that fun we are displaying seach1 i.e.,magnify glass &searchbox
 */
searchicon1.addEventListener('click',
function(){
   search1.style.display='flex';
   searchicon1.style.display='none'; 
})

const searchicon2=document.querySelector('#searchicon2');//main magnify normal in header
//const srchicon2=document.querySelector('#srchicon2');//inside magnifying glass 
const search2=document.querySelector('#searchinput2');//search box

searchicon2.addEventListener('click',
function(){
   search2.style.display='flex';
   searchicon2.style.display='none'; 
})



const bar=document.querySelector('.fa-bars');
const cross=document.querySelector('#hdcross');
const headerbar=document.querySelector('.headerbar');
bar.addEventListener('click',function()
{
    
        cross.style.display='block';
        headerbar.style.right='0%';
        home.style.display="none";
    
})
cross.addEventListener('click',function()
{
    cross.style.display='none';
    headerbar.style.right='-100%';
    home.style.display="block";
    
})
/********************************** BIG HOMEEEEEEEEEEEEEEEEEEE    *************************************/
const bighome=document.querySelector(".bighome");
bighome.addEventListener("click", () => {
  const scrollPosition = 100; // change this to the desired scroll position
  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth"
  });
});

/********************* **************big ABOUT US*****************************************/
const aboutus=document.querySelector('.aboutus');
const aboutcross=document.querySelector('#aboutcross');
const header_aboutus=document.querySelector('.header_aboutus');
const header=document.querySelector('.header');
header_aboutus.addEventListener('click',function()
{ 
    aboutus.style.display="block";
    aboutus.style.right='0%';
    home.style.display="none";
    
}
)


aboutcross.addEventListener('click',function()
{
    aboutus.style.display="none";
    home.style.display="block";
  
})
/*************************SMALL ABOUT US*************************** */

const headerbar_aboutus=document.querySelector('.small_aboutus');
const aboutcrosssmall=document.querySelector('#aboutcrosssmall');

headerbar_aboutus.addEventListener('click',function()
{ 
    aboutus.style.display="block";
    aboutus.style.right='0%';
   home.style.display="none";
    
}
)
aboutcrosssmall.addEventListener('click',function()
{
    aboutus.style.display="none";
    home.style.display="block";
    
})

/********************************* * big booking table ****************************/
const booktabl=document.querySelector('.mnop');
const crossmar=document.querySelector('#bookcrossmark');
const bookingtabl=document.querySelector('.bookingtable');
booktabl.addEventListener('click',function()
{ bookingtabl.style.display="block";
    bookingtabl.style.right='10%';
    home.style.filter="blur(5px)";
    

   }
)
crossmar.addEventListener('click',function()
{
    bookingtabl.style.display="none";
    home.style.filter="blur(0px)";
    
})
/******************* small booking table******************************************************/
const bookingtable1=document.querySelector('.jklm');
const bookcrosssmall1=document.querySelector('#bookcrossmark11');

bookingtable1.addEventListener('click',function()
{ 
    bookingtabl.style.display="block";
    bookingtabl.style.right='0%';
    home.style.display="none";
}
)
bookcrosssmall1.addEventListener('click',function()
{
    bookingtabl.style.display="none";
    home.style.display="block";
    
})



/*************************FOOD MENU*************************** */

const foodmenu=document.querySelector('.foodmenu');
const foodmenucross=document.querySelector('#foodmenucross');
const header_foodmenu=document.querySelector('.header_foodmenu');
header_foodmenu.addEventListener('click',function()
{ 
    foodmenu.style.display="block";
    foodmenu.style.right='0%';
    home.style.display="none";
    }
)
foodmenucross.addEventListener('click',function()
{
    foodmenu.style.display="none";
    home.style.display="block";
    
    
    
})
/*************************SMALL FOOD MENU*************************** */


const foodmenucross11=document.querySelector('#foodmenucross11');
const smallfoodmenu=document.querySelector('.small_foodmenu');
smallfoodmenu.addEventListener('click',function()
{ 
    foodmenu.style.display="block";
    foodmenu.style.right='0%';
    home.style.display="none";
    }
)
foodmenucross11.addEventListener('click',function()
{
    foodmenu.style.display="none";
    home.style.display="block";
    
    
})





/*********************************SIGN UP***********************************/

const headerbar_signin=document.querySelector('#user-lap');
const signup=document.querySelector('.container');
const signupcross=document.querySelector('#signupcross');
headerbar_signin.addEventListener('click',function()
{ 
    signup.style.display="block";
    signup.style.right='30%';
    home.style.filter="blur(5px)";
   
}
)
signupcross.addEventListener('click',function()
{
    signup.style.display="none";
    home.style.filter="blur(0px)";
    
})

/*********************************SMALL SIGN UP*************************************************/

const smallsignin=document.querySelector('#user-mb');
const signupcross11=document.querySelector('#signupcross11');
smallsignin.addEventListener('click',function()
{ 
    signup.style.display="block";
    signup.style.right='0%';
    home.style.display="none";
}
)
signupcross11.addEventListener('click',function()
{
    signup.style.display="none";
    home.style.display="block";
    
})

/******************************small home******************************************* */
const smallhome=document.querySelector('.smallhome');

smallhome.addEventListener('click',function()
{
    cross.style.display='none';
    headerbar.style.right='-100%';
    home.style.display="block";
    
})
/**********************************VISIT NOW************************************************* */
const visitnow=document.querySelector("#scroll-button");
visitnow.addEventListener("click", () => {
  const scrollPosition = 600; // change this to the desired scroll position
  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth"
  });
});


  

