<template lang="pug">
form.contact(
  ref="form"
  @submit.prevent="sendEmail"
)
  PostIt.toast-post-it(
    :text="postItText"
    :class="postItClass"
    :destroyable="false"
  )
  .header Send me a message!
  .row
    label Name:
    input(
      v-model="name"
      type="text"
      name="name"
    )
  .row
    label Email:
    input(
      v-model="email"
      type="email"
      name="email"
    )
  .row
    label Message:
    textarea(
      v-model="message"
      name="message"
    )
  .row
    input.button(
      type="submit"
      :disabled="disabled"
      value="Send"
    )
</template>

<script>
  import emailjs from '@emailjs/browser';
  import PostIt from './post-it.vue';

  export default {
    components: { PostIt },

    data() {
      return {
        name: null,
        email: null,
        message: null,
        sending: false,
        postItText: null,
        postItClass: null,
      }
    },
    
    computed: {
      disabled() {
        if (this.sending) return true;
        return !this.name || !this.email || !this.message;
      },
    },

    methods: {
      sendEmail() {
        this.sending = true;
        emailjs.sendForm('service_thm99aq', 'template_i0egbgp', this.$refs.form, 'JxDhn_2D5kkXHlRwM')
          .then(() => { // Success
            this.sending = false;
            this.name = null;
            this.email = null;
            this.message = null;
            this.triggerPostIt('Email sent!');
          }, () => { // Error
            this.sending = false;
            this.triggerPostIt('Something went wrong... Try again?');
          });
      },

      triggerPostIt(text) {
        this.postItText = text;
        this.postItClass = 'visible';
        setTimeout(() => {
          this.postItText = null;
          this.postItClass = null;
        }, 2000);
      },
    }
  }
</script>

<style scoped lang="scss">
  @import '../../public/colors.scss';
  .contact {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    color: $white;
    font-size: 24px;

    border: 1px solid $cyan;
    border-radius: 8px;
    box-shadow:
      0 0 7px $cyan,
      0 0 10px $cyan,
      0 0 21px $white;
    .header {
      margin: 16px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      margin: 16px;
    }
    .row:last-child { justify-content: end; }

    input:not(.button), textarea {
      font-size: 20px;
      width: 60%;
      font-family: 'Righteous', cursive;
    }
    input:not(.button):focus, textarea:focus{
      outline: none;
    }
    textarea {
      resize: none;
      overflow-y: scroll;
      height: 90px;
    }
    input.button {
      width: 80px;
      height: 40px;
      cursor: pointer;
      background-color: $cyan;
      font-family: 'Righteous', cursive;
      color: white;

      border-radius: 8px;
      border: 0;
    }
    input.button:hover {
      transform: translate(-1px, -1px);
      box-shadow:
        0 0 3px $cyan,
        0 0 5px $cyan,
        0 0 10px $cyan,
        0 0 15px $white,
    }
    input.button:disabled {
      pointer-events: none;
      cursor: auto;
      opacity: 0.5;
    }

    .toast-post-it {
      visibility: hidden;
      opacity: 0;
      transition: visibility 0.2s, opacity 0.2s linear, transform 0.2s linear;
    }
    .toast-post-it.visible {
      visibility: visible;
      opacity: 1;
      transform: rotate(-8deg) translate(2px, 2px);
    }
  }
</style>