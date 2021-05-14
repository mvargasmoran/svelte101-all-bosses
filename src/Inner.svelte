<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch('message', {
      text: 'Hello! 😌',
    });
  }
</script>

<button on:click={sayHello}>
	Click to say anything the event dispatches
</button>
