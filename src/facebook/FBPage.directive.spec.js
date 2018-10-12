describe('FB Page directive', () => {
  let compile, scope;
  const element = `<fb-page
    app-id="383211488859037"
    href="https://www.facebook.com/dopeyones/"
    xfbml="true"></fb-page>`;

  beforeEach(() => {
    module('fbPagePlugin');
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
