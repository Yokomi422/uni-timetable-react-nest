from scraping.interface import Faculty


class Scraper:
    """
    Args:
        faculty (Faculty): Faculty class, do not forget to instantiate it
    """

    def __init__(self, faculty: Faculty) -> None:
        self.faculty = faculty

    def run(self):
        self.faculty.execute()
