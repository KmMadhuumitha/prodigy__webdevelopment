window.addEventListener('scroll', function() {
    var navigation = document.getElementById('navigation');
    if (window.scrollY > 0) {
      navigation.style.backgroundColor = '#fff';
      navigation.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    } else {
      navigation.style.backgroundColor = 'transparent';
      navigation.style.boxShadow = 'none';
    }
  });