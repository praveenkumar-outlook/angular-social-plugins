describe('FB Share directive', () => {
  let compile, scope;
  const element = `<fb-share
    app-id="383211488859037"
    href="https://developers.facebook.com/docs/plugins/"
    xfbml="true"></fb-share>`;

  beforeEach(() => {
    module('fbSharePlugin');
    inject(($compile, $rootScope) => {
      compile = $compile;
      scope = $rootScope.$new();
    });
  });

  it('Should Exist', () => {
    const dom = angular.element(element);
    const result = compile(dom)(scope);
    scope.$digest();

    expect(result).toBeDefined();
  });
});
