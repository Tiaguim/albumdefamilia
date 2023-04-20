var images = [
"https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png","https://i.postimg.cc/wjMnFtMX/father.jpg",
"https://i.postimg.cc/5ymDKL83/bro.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg","https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = [
    "Álbum de Famíla","João Silva","Pedro Silva","Enzo Silva","Ana Silva","Joana Silva"
]
var i = 0;
function update()
{
    i++;
    var numbersOfFamilyInArray = 5
    of(i > numbersOfFamilyInArray )
    {
        i = 0
    }
    var updatedImage = images[i];
    var udatedName = names[i];
    document.getElementById("familyMemberImage").src = updatedImage;
    document.getElementById("familyMemberName").innerHTML = updatedName;
}