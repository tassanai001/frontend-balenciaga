import register, { unregister } from './registerServiceWorker';

describe('service worker utilities', () => {
  const originalNavigator = global.navigator;

  afterEach(() => {
    global.navigator = originalNavigator;
  });

  it('register does nothing when serviceWorker is unavailable', () => {
    global.navigator = {};
    expect(() => register()).not.toThrow();
  });

  it('unregister does nothing when serviceWorker is unavailable', () => {
    global.navigator = {};
    expect(() => unregister()).not.toThrow();
  });
});
