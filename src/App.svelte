<script>
  import Outer from "./Outer.svelte";

  function handleMessage(e) {
    alert(e.detail.text);
  }
</script>
<Outer on:message={handleMessage}/>

