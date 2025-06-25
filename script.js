function openimage(){
    document.getElementById('enlarge').style.display='flex';
    document.getElementById('old_im').style.display='none';
    document.getElementById('c1').style.display='none';
    document.getElementById('c2').style.display='flex';

}
function closeimg()
{
    document.getElementById('enlarge').style.display='none';
    document.getElementById('old_im').style.display='block';
    document.getElementById('c1').style.display='block';
    document.getElementById('c2').style.display='none';
}