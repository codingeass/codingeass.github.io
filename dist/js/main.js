var pages=['project','resurgence','interaction','titiksha','about'];
function content_change(page){
	window.location.hash=page;
	var xmlhttp=false;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(xmlhttp)
	{		
		xmlhttp.open("GET",'dist/views/'+page+'.html?'+Math.random());
		xmlhttp.send();
		xmlhttp.onreadystatechange=function()
		{
			if(xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById('content_dir').innerHTML=xmlhttp.responseText;
				window.setInterval(removeCarousel(),2000);
			}
		}					
	}
}

window.onload =function(){
	var hash = window.location.hash;
	if(hash=="")
	content_change('project');
	else
	{
		if(pages.indexOf(hash.slice(1))>-1)
		content_change(hash.slice(1));
		else
		{
			content_change('project');
		}
	}	

}

function active_css(obj)
{
	var allLi=document.getElementById("navbar").getElementsByTagName("li");
	for(var i=0;i<allLi.length;i++)
	{
		allLi[i].className="";	
	}
	obj.className="active";
}

function removeCarousel()
{
	
	if(screen.availWidth<996)
	{
		//alert(document.getElementById('projects').innerHTML);
		//var proj=document.getElementById('content_dir').getElementById('projects');
		document.getElementById('slider_remove_id').className="";	
		document.getElementById('arrow').innerHTML="";
	}
}

function meta_social_tag(title,image,url,description){
	var meta='<meta property="og:title" content="'+title+'" /><meta property="og:type" content="article" /> \
        <meta property="og:image" content="'+image+'" /> \
        <meta property="og:url" content="'+url+'" /> \
        <meta property="og:description" content="'+description+'" />';
	document.getElementsByTagName('head')[0].innerHTML=document.getElementsByTagName('head')[0].innerHTML+meta; 
}
meta_social_tag("Amandeep Gupta","http://codingeass.github.io/dist/img/profile.png","http://codingeass.github.io","Portfolio ,Web Developer | Software Developer | Programmer");