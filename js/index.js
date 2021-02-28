console.log('its working!')

var about = document.getElementById("about");
about.addEventListener("mouseover", aboutfunc, false);
about.addEventListener("mouseout", aboutfunc1, false);

function aboutfunc()
{  
   about.setAttribute("style", "text-decoration:underline;")
}

function aboutfunc1()
{  
   about.setAttribute("style", "text-decoration:none;")
}

var skills = document.getElementById("skills");
skills.addEventListener("mouseover", skillsfunc, false);
skills.addEventListener("mouseout", skillsfunc1, false);

function skillsfunc()
{  
   skills.setAttribute("style", "text-decoration:underline;")
}

function skillsfunc1()
{  
   skills.setAttribute("style", "text-decoration:none;")
}

var work = document.getElementById("work");
work.addEventListener("mouseover", workfunc, false);
work.addEventListener("mouseout", workfunc1, false);

function workfunc()
{  
   work.setAttribute("style", "text-decoration:underline;")
}

function workfunc1()
{  
   work.setAttribute("style", "text-decoration:none;")
}

var contact = document.getElementById("contact");
contact.addEventListener("mouseover", contactFunc, false);
contact.addEventListener("mouseout", contactFunc1, false);

function contactFunc()
{  
   contact.setAttribute("style", "text-decoration:underline;")
}

function contactFunc1()
{  
   contact.setAttribute("style", "text-decoration:none;")
}


var contact = document.getElementById("contact");
contact.addEventListener("mouseover", contactFunc, false);
contact.addEventListener("mouseout", contactFunc1, false);

function contactFunc()
{  
   contact.setAttribute("style", "text-decoration:underline;")
}

function contactFunc1()
{  
   contact.setAttribute("style", "text-decoration:none;")
}