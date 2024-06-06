from selenium import webdriver

from scraping.interface import Faculty

driver = webdriver.Chrome()


class Agriculture(Faculty):
    def execute(self):
        self._scrape(driver)
