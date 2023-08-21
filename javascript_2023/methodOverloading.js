// Method overloading is not possible in js.
function print()
{
console.log("Hi")

}



function print(name)
{
    console.log("Hi "+name)
}


function print(name,age)
{
    console.log("Hi "+name+" and age is "+age)
}


// Recent function will be called.

print("Varun")
// Hi Varun and age is undefined



function displayBrowsername(browsername,browserversion,remoteexe)
{
    if (typeof(browserversion==="number" && typeof(remoteexe==="boolean")))
    {
        console.log(`browser: ${browsername},'version:' ${browserversion},'remoteexec:' ${remoteexe}`);
    }
    else if (typeof(browserversion=="number"))
    {
        console.log(`browser: ${browsername} 'version:' ${browserversion}`)
    }
    else{
        console.log(`browser: ${browsername}`)
    }
}


displayBrowsername("chrome",100,true)
// browser: chrome,'version:' 100,'remoteexec:' true


displayBrowsername("Firefox",90)
// browser: Firefox,'version:' 90,'remoteexec:' undefined