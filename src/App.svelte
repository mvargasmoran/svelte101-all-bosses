<script>
  //import { each } from "svelte/internal";
  import Thing from "./Thing.svelte";

  let things = [
    { id: 1, color: 'darkblue' },
    { id: 2, color: 'indigo' },
    { id: 3, color: 'deeppink' },
    { id: 4, color: 'salmon' },
    { id: 5, color: 'gold' }
  ];

  function handleClick() {
    things = things.slice(1);
  }
</script>

<button on:click={handleClick}>
  Remove top thing
</button>
<hr>
<div>
{#each things as thing}
  <Thing current={thing.color}/>
{/each}
</div>
<div>
{#each things as thing (thing.id)}
  <Thing current={thing.color}/>
{/each}
</div>
<style>
  div {
    border: 1px solid orchid;
    display: block;
    width: 48%;
    float: left;
  }
</style>
