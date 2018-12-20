function hitungLuas() {
    var width = +document.getElementById("panjang").value;
    var height = +document.getElementById("lebar").value;
    var area = height * width;
    document.getElementById("luas").value = area;

}