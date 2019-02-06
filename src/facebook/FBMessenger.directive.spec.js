describe('FB Messenger directive', () => {
  let compile, scope;
  const element = `<fb-messenger
    app-id="383211488859037"
    page-id="422199175185434"
    xfbml="true"></fb-messenger>`;

  beforeEach(() => {
    module('fbMessengerPlugin');
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
