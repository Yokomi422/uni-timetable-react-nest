"""
poetry run python -m scraping.scraping
"""

from scraping.data import get_scraper, get_urls
from scraping.scraper import Scraper


def main():
    urls = get_urls()
    for faculty_name, url in urls.items():
        faculty_instance = get_scraper(faculty_name, url)
        if not faculty_instance:
            raise ValueError(f"No scraper found for {faculty_name}")

        scraper = Scraper(faculty_instance)
        scraper.run()


if __name__ == "__main__":
    main()
