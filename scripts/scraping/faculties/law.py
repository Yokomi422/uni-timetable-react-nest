from scraping.interface import Faculty

from selenium import webdriver

driver = webdriver.Chrome()


class Law(Faculty):
    def execute(self):
        self._scrape(driver)
