from selenium import webdriver

from scraping.interface import Faculty

driver = webdriver.Chrome()


class Liberal_arts(Faculty):
    def execute(self):
        self._scrape(driver)
