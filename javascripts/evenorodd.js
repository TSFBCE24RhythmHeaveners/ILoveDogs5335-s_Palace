var number;

function evenorodd() {
  number = Math.round(Number(window.prompt('Enter a number.')));
  if (number % 2 == 0) {
    window.alert(['The number ',number,' is even.'].join(''));
  } else if (number % 2 == 1) {
    window.alert(['The number ',number,' is odd.'].join(''));
  }
}
