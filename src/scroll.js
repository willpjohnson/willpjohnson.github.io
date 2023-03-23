export default {
  methods: {
    getSizeOfContainerAndPositionsOfRefs() {
      this.tabs.forEach((tab) => {
        const el = this.$refs[tab.ref].$el;
        tab.top = el.offsetTop;
        tab.bottom = el.offsetTop + el.offsetHeight;
      });
      const container = this.$refs.container;
      this.containerHeight = container.offsetHeight;
      this.containerScrollHeight = container.scrollHeight;
    },

    onScroll() {
      const scrollTop = this.$refs.container.scrollTop;
      const scrollBottom = scrollTop + this.containerHeight;
      const scrollPadding = 100; // If we're within this number of the edge of the scroll, just count it as the edge
      if (scrollTop < scrollPadding) {
        // This is just the beginning
        this.focusedRef = this.tabs[0].ref;
      } else if (scrollBottom > this.containerScrollHeight - scrollPadding) {
        // This is the full scroll limit
        this.focusedRef = this.tabs[this.tabs.length - 1].ref;
      } else {
        // This is everywhere in between
        const middleOfScreen = (scrollTop + scrollBottom) / 2;
        const middleTab = this.tabs.find(t => t.top < middleOfScreen && t.bottom > middleOfScreen);
        if (middleTab) { this.focusedRef = middleTab.ref }
      }
    },

    scrollTo(ref) {
      const el = this.$refs[ref].$el;
      const tab = this.tabs.find(t => t.ref === ref);
      const height = tab.bottom - tab.top;
      if (height > this.containerHeight) {
        el.scrollIntoView();
      } else {
        el.scrollIntoView({
          behavior: 'auto',
          block: 'center',
          inline: 'center'
        });
      }
    },
  }
};
