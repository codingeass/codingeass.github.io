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