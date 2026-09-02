let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

function filterProducts() {
  let input = document.getElementById('searchInput');
  let filter = input.value.toLowerCase();
  let products = document.querySelectorAll('.products-container .product');
  products.forEach(product => {
    let name = product.querySelector('h3').textContent.toLowerCase();
    if (name.includes(filter)) {
      product.style.display = '';
    } else {
      product.style.display = 'none';
    }
  });
}