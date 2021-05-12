<script>
  //let numbers = [1, 2, 3, 4];
  let numbers = [1, 2];
  function addNumberFugly1() {
    // push doesn't trigger and update/reactivity
    numbers.push(numbers.length + 1);
    numbers = numbers; // this ugly trick solves the issue, as reactivity is triggered by assignment
  }

  function addNumberTrickery() {
    numbers = [...numbers, numbers.length + 1]; // this it's still a little trick like, but it gets the job done
  }

  function addNumber() {
    numbers[numbers.length] = numbers.length + 1;
  }

  $: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>
<button on:click="{addNumber}">
  Add a number
</button>
