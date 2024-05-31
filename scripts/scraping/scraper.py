from .interface import Faculty


class Scraper:
    """
    Args:
        url (str): URL of the faculty
        faculty (Faculty): Faculty class, do not forget to instantiate it
    """
    def __init__(self, url: str):
        self.url = url


    def run(self):
        scraper = self.faculty()
        self.faculty.execute()
