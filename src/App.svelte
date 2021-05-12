<script>
  	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<h1>The famous Cats of Youtube</h1>

<h3>Regular usage</h3>
<ul>
  {#each cats as cat, index}
    <li>
      <a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
        {index+1}: {cat.name}
      </a>
    </li>
  {/each}
</ul>


<h3>Destructuring usage</h3>
<ul>
  {#each cats as {id, name}, index}
    <li>
      <a target="_blank" href="https://www.youtube.com/watch?v={id}">
        {index+1}: {name}
      </a>
    </li>
  {/each}
</ul>

