describe('E2E: main page', function() {
  var ptor;

  beforeEach(function() {
    browser.get('http://127.0.0.1:9000/');
    ptor = protractor.getInstance();
  });

  it('should load the main page', function() {
    var ele = by.model('query');
    expect(ptor.isElementPresent(ele)).toBe(true);
  });

  describe('main page', function() {
    beforeEach(function() {
      element(by.model('query')).sendKeys('life\n');
    });

    it('should have 20 books', function() {
      var elems = element.all(by.repeater('booksBlock in books'));
      expect(elems.count()).toBe(20);
    });

    it('should navigate to the book page when clicking', function() {
      element(by.css('.highlights .highlights__box:nth-child(2) a')).click();
      expect(ptor.getCurrentUrl()).toMatch(/\/book/);
    });
  });
});
