describe('FB Group directive', () => {
  let compile, scope;
  const element = `<fb-group
    app-id="383211488859037"
    href="https://www.facebook.com/groups/ayearofrunning/"
    xfbml="true"></fb-group>`;

  beforeEach(() => {
    module('fbGroupPlugin');
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
