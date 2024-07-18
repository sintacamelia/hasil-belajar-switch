var item = prompt('masukkan nama maakanan/ minuman : \n (cth: nasi, dafing, susu, hamburger, softddrink)');

switch(item){
    case 'nasi':
    alert('makanan/minuman SEHAT!');
    break;
    case 'daging':
    alert('makanan/minuman SEHAT!');
    break;
    case 'susu':
    alert('makanan/minuman SEHAT!');
    break;
    case 'hamburger':
    alert('makanan/minuman TIDAK SEHAT!');
    break;
    case 'softdrink':
    alert('makanan/minuman TIDAK SEHAT!');
    break;
    default :
    alert('anda memasukkan nama makanan / minuman yang salah!');
    break;
}