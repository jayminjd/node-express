enum PrintMedia{
newspaper=1,
newsletter=getmedia('newletter'),
magazine=newsletter*5,
book=10
}
enum printmedia2{
    newspaper=1,
    newsletter,
    magazine,
    book
}

function getmedia(media:string):number{
    if(media==='newletter'){
        return 5;
    }
    else{ 
        return 0;}
}
PrintMedia.newsletter;
console.log(PrintMedia.magazine);

function getmedia2(media:string):string{
    if(media==='forbs'||media==='Outlook'){
        return printmedia2[3];}
}
function getmedia3(media:string):printmedia2{
    if(media==='forbs'||media==='Outlook')
    {return printmedia2.magazine;}
}


let temp:string=getmedia2('forbs');
let temp2:printmedia2=getmedia3('forbs');
console.log(temp);
console.log(temp2);