describe('FB Quote directive', () => {
  let compile, scope;
  const element = `<fb-quote
    app-id="383211488859037"
    xfbml="true"></fb-quote>`;

  beforeEach(() => {
    module('fbQuotePlugin');
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
