<script>
  export let answer = 'a mystery';
  export let color = 'orchid';
</script>
<p style="color: {color || 'orchid'};">
  The answer is {answer}
</p>
