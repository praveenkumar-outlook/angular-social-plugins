describe('FB Save directive', () => {
  let compile, scope;
  const element = `<fb-save
    app-id="383211488859037"
    uri="https://www.instagram.com/facebook/"
    xfbml="true"></fb-save>`;

  beforeEach(() => {
    module('fbSavePlugin');
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
