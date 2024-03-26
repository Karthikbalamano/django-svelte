<script>
  import { FilmStore } from "../../film-store";

  let films = [];

  FilmStore.subscribe((values) => (films = values));
</script>

<!-- <h1>{film.toUpperCase()}</h1>

<style>
  h1 {
    font-size: 40px;
    background-color: red;
  }
</style> -->

<!-- {#if film.startsWith("f")}
  <p>starts with T</p>
{:else}
  <p>Does not starts with T</p>
{/if} -->

<ul>
  {#each films as film}
    <li>
      <a href="films/{film.id}">{film.name}</a>
    </li>
  {/each} 
</ul>
