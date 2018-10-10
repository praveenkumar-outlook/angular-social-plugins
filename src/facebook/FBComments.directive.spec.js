describe('FB Comments directive', () => {
  let compile, scope;
  const element = `<fb-comments
    app-id="383211488859037"
    href="https://www.facebook.com/dopeyones/"
    xfbml="true">
    </fb-comments>`;

  beforeEach(() => {
    module('fbCommentsPlugin');
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
