import Controller from '@ember/controller';

export default Controller.extend({
  size: 'loader-md', //default loader size medium
  loaderSmall: 'loader-sm',
  loaderMeduim: 'loader-md',
  loaderLarge: 'loader-lg',

  actions: {
      setLoaderSmall() {
          this.set('size', this.loaderSmall)
      },
      setLoaderMeduim() {
          this.set('size', this.loaderMeduim)
      },
      setLoaderLarge() {
          this.set('size', this.loaderLarge)
      }
  }
});
