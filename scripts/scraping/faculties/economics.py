from scraping.interface import Faculty

from selenium import webdriver

driver = webdriver.Chrome()

class Economics(Faculty):
    def execute(self):
        self._scrape(driver)
