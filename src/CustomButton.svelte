<button on:click>
  Click my customness
</button>

<style lang="scss">
  button {
    background: #E2E8F0;
    color: #64748B;
    border: unset;
    border-radius: 6px;
    padding: .75rem 1.5rem;
    cursor: pointer;
    transition: .3s all ease-in-out;
    &:hover {
      background: #CBD5E1;
      color: #475569;
    }
    &:focus {
      background: #94A3B8;
      color: #F1F5F9;
    }
  }
</style>
