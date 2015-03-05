function content_change(page){
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
	content_change('project');
}