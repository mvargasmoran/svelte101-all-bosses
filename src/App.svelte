<script>
	async function getRandomNumber() {
		const res = await fetch(`https://svelte.dev/tutorial/random-number`);
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}

  let promise = getRandomNumber();
	function handleClick() {
		promise = getRandomNumber();
	}
</script>
<h1>
  Start by calling the calling the promise
</h1>
<button on:click={handleClick}>
	Fetch for a random number
</button>

{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<div style="border: 1px solid orchid;min-height: 30px;">
  <p>
    There's no need for to await, then, catch.
    it can just be await then.
  </p>
{#await promise then value}
	<p>the value is {value}</p>
{/await}
</div>

