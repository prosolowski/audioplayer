<template>
  <div class="player">
    <div class="player__image">
      <div class="player__option--top transparent-bg">
        <button class="btn player__option__loop">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>
        </button>
        <button class="btn player__option__shuffle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20" height="20" viewBox="0 0 24 24"><path d="M2 7h-2v-2h2c3.49 0 5.48 1.221 6.822 2.854-.41.654-.754 1.312-1.055 1.939-1.087-1.643-2.633-2.793-5.767-2.793zm16 10c-3.084 0-4.604-1.147-5.679-2.786-.302.627-.647 1.284-1.06 1.937 1.327 1.629 3.291 2.849 6.739 2.849v3l6-4-6-4v3zm0-10v3l6-4-6-4v3c-5.834 0-7.436 3.482-8.85 6.556-1.343 2.921-2.504 5.444-7.15 5.444h-2v2h2c5.928 0 7.543-3.511 8.968-6.609 1.331-2.893 2.479-5.391 7.032-5.391z"/></svg>
        </button>
        <button class="btn player__option__repeat">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20" height="20" viewBox="0 0 24 24"><path d="M13.5 2c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z"/></svg>
        </button>
        <button @click="$emit('togglePlayer', true)" class="btn player__option__playlist">
          <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" fill="#fff" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero"/></svg>
        </button>
      </div>
      <div class="player__info transparent-bg">
        <div class="player__info__title">Icona Pop</div>
        <div class="player__info__subtitle">Still Don't Know</div>
      </div>
    </div>
    <div class="player__option">
      <button class="btn player__option__share btn--bg-white"><svg xmlns="http://www.w3.org/2000/svg" fill="#60558f" width="14" height="14" viewBox="0 0 24 24"><path d="M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z"/></svg></button>
      <button class="btn player__option__previous"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="14" height="14" viewBox="0 0 24 24"><path d="M4 2v20h-2v-20h2zm18 0l-16 10 16 10v-20z"/></svg></button>
      <button class="btn player__option__play"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg></button>
      <button class="btn player__option__next"><svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="14" height="14" viewBox="0 0 24 24"><path d="M20 22v-20h2v20h-2zm-18 0l16-10-16-10v20z"/></svg></button>
      <button class="btn player__option__favourite btn--bg-white"><svg xmlns="http://www.w3.org/2000/svg" fill="#f00" width="14" height="14" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.player {
  display: flex;
  flex-direction: column;
  height: 100%;
  .transparent-bg {
    height: 64px;
    background-color: rgba(71, 61, 116, 0.6);
  }
  &__info {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__title {
      font-size: 1rem;
      font-weight: 700;
    }
    &__subtitle {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: -1px;
    }
  }
  &__image {
    position: relative;
    background-image: url("../assets/iconapop.jpg");
    height: 340px;
    background-size: cover;
    &:before {
      content: " ";
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(71, 61, 116, 0.26);
    }
  }
  &__option {
    flex: auto;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    .btn {
      width: 36px;
      height: 36px;
      background-color: #60558f;
      border-radius: 36px;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:active {
        background-color: #473d74;
      }
      &:nth-child(3) {
        width: 50px;
        height: 50px;
      }
      &--bg-white {
        background-color: #fff;
        &:active {
          background-color: #d0c7f4;
        }
      }
    }
    &--top {
      position: absolute;
      top: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .player__option__playlist {
        position: absolute;
        right: 0;
        opacity: 0.5;
      }
      .btn {
        background-color: transparent;
        border: 0;
        padding: 0 10px;
        cursor: pointer;
        &:active {
          svg {
            fill: #d0c7f4;
          }
        }
      }
    }
  }
}
</style>
