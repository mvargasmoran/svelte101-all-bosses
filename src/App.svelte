<script>
  import Inner from "./Inner.svelte";

  function handleMessage(e) {
    alert(e.detail.text);
  }
</script>
<Inner on:message={handleMessage}/>

