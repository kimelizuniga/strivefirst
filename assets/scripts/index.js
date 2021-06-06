let copyright = document.getElementsByClassName("copyright");

let newDate = new Date();

for(let ctr = 0; ctr < copyright.length; ctr++)
{
    copyright[ctr].innerHTML = `${newDate.getFullYear()} Copyright <i class="far fa-copyright"></i> Strive First`;
}