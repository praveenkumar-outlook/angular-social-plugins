describe('FB Like directive', () => {
  let compile, scope;
  const element = `<fb-like
    app-id="383211488859037"
    href="https://developers.facebook.com/docs/plugins/"
    xfbml="true"></fb-like>`;

  beforeEach(() => {
    module('fbLikePlugin');
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
